import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { existRegistry, validateAuth, undefinedApiError, sendApiError } from './app/api/handlers/apiHandler.js'

export const config = {
    matcher: ['/api/:path*','/docs/:path*'],
}

function apiCalls(request){
    if(!existRegistry(request.nextUrl.pathname)){
        console.log('not a registered path')
        return NextResponse.rewrite(new URL(sendApiError(404), request.url))
    }
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
}

function docsCalls(request){
    return NextResponse.next()
}

export function middleware(request){
    if(request.nextUrl.pathname.startsWith('/api')){
        console.log('enters middleware and calls API')
        return apiCalls(request)
    }
    if(request.nextUrl.pathname.startsWith('/docs')){
        console.log('enters middleware and calls DOCS')
        return docsCalls(request)
    }
}