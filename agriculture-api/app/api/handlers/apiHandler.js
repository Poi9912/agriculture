import { headers } from "next/headers";

const apiPathRegistry = [
    '/api/hello',
]

function existRegistry(pathIs){
    let inRegistry = false;
    apiPathRegistry.forEach(registry => {
        console.log(typeof registry)
        if(pathIs===registry){
            inRegistry = true
        }
    })
    return inRegistry
}

//auth function for the api
function validateAuth(token){
    const valid = true //mocked for now
    let authHeader = headers().get('authorization')
    console.log('validateAuth')
    return valid
}

const responseDefinitions = [
    {code:400,details:"Bad Request",url:"/api/handlers/pages/400"},
    {code:401,details:"Unauthorized",url:"/api/handlers/pages/401"},
    {code:403,details:"Forbidden",url:"/api/handlers/pages/403"},
    {code:404,details:"Resource not found",url:"/api/handlers/pages/404"},
    {code:500,details:"Internal Server Error",url:"/api/handlers/pages/500"},
    {code:502,details:"Unable to reach backend, please try again later",url:"/api/handlers/pages/502"},
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
    console.log('Rewrite url is: ' + urlOut)
    return urlOut
}

function undefinedApiError(errorObject){
    console.error(errorObject)
    return getUrlFromDefinitions(500)
}

function sendApiError(code) {
    return getUrlFromDefinitions(code)
}

module.exports = {
    validateAuth,
    undefinedApiError,
    sendApiError,
    existRegistry,
}