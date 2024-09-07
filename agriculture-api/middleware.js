import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { existRegistry, validateAuth, undefinedApiError, sendApiError } from './app/api/handlers/apiHandler.js'

export const config = {
    matcher: ['/api/:path*','/docs/:path*'],
}


export function middleware(request){
    console.log('enters middleware')
    console.log("path is: " + request.nextUrl.pathname)

    if(!existRegistry(request.nextUrl.pathname)){
        console.log('not a registered path')
        return NextResponse.rewrite(new URL(sendApiError(404), request.url))
    }
    //only API calls
    
    try {
        if(!validateAuth(headers.Authorization)){
            console.log('failed auth')
            return NextResponse.rewrite(new URL(sendApiError(401), request.url))
        } else {
            console.log('correct auth')
            return NextResponse.next()
        }
    } catch (error) {
        return NextResponse.rewrite(new URL(undefinedApiError(error), request.url))
    }
    //redirect function
    //return NextResponse.redirect(new URL('/', request.url))
}