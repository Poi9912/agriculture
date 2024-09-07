import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { sendApiError, undefinedApiError } from './apiErrorHandler.js'

const apiPathRegistry = [
    '/api/hello',
]

function existRegistry(path){
    apiPathRegistry.forEach(registry => {
        if(path==registry){
            return true
        }
    })
    return false
}

//auth function for the api
function validateAuth(token){
    const valid = true //mocked for now
    let authHeader = headers().get('authorization')
    console.log('validateAuth')
    return valid
}

export function middleware(request){
    console.log('enters middleware')
    console.log("path is: " + request.nextUrl.pathname)

    if(!existRegistry(request.nextUrl.pathname)){
        console.log('not a registered path')
        sendApiError(404)
    }
    //only API calls
    try {
        if(!validateAuth(headers.Authorization)){
            console.log('failed auth')
            sendApiError(401)
        } else {
            console.log('correct auth')
            return NextResponse.next()
        }
    } catch {
        undefinedApiError(error)
    }
    //redirect function
    //return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/api/:path*',]
}