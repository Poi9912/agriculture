//import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

const apiPathRegistry = [
////////     '/api/',  //base for new routes

    //monitoring endpoint
    '/api/monitoring',
    //registered operations
    '/api/crops',
    '/api/crop-locations',
    '/api/crop-stock',
    '/api/customers',
    '/api/farmers',
    '/api/invoices',
    '/api/locations',
    '/api/market-operations',
    '/api/market-stock',
    '/api/markets',
    '/api/sensors',
]

function existRegistry(pathIs){
    let inRegistry = false;
    apiPathRegistry.forEach(registry => {
        if(pathIs==registry){
            inRegistry = true
        }
    })
    return inRegistry
}

//auth function for the api
function validateAuth(token){
    const valid = true //mocked for now
    //let authHeader = headers().get('authorization')
    //console.log('validateAuth')
    return valid
}

const responseDefinitions = [
    {code:400,details:"Bad Request",url:"/error/pages/400"},
    {code:401,details:"Unauthorized",url:"/error/pages/401"},
    {code:403,details:"Forbidden",url:"/error/pages/403"},
    {code:404,details:"Resource not found",url:"/error/pages/404"},
    {code:500,details:"Internal Server Error",url:"/error/pages/500"},
    {code:502,details:"Unable to reach backend, please try again later",url:"/error/pages/502"},
];

function getUrlFromDefinitions(code){
    let urlOut = undefined;
    if(code!=500){
        responseDefinitions.forEach(definition => {
            if(definition.code==500){
                urlOut = definition.url
            }
        })
    }
    responseDefinitions.forEach(definition => {
        if(definition.code==code){
            urlOut = definition.url 
        }
    })
    console.log('Redirect path is: ' + urlOut)
    return urlOut
}

function undefinedApiError(errorObject){
    console.error(errorObject)
    return getUrlFromDefinitions(500)
}

function sendApiError(code) {
    return getUrlFromDefinitions(code)
}

function handleResponse(url,data,status){
    const envSB = process.env.ENV ? process.env.ENV : 'sb'
    const host = process.env.HOST ? process.env.HOST : 'localhost'

    if(envSB=='sb'){
        url=host
    }

    switch (status){
        case 200:
            return NextResponse.json(data,{status})
        case 204:
            return new Response(null,{status: 204})
        default:
            console.log(status)
            console.log(data)
            return NextResponse.redirect(new URL(sendApiError(status),url))
    }
}

module.exports = {
    validateAuth,
    undefinedApiError,
    sendApiError,
    existRegistry,
    handleResponse,
}