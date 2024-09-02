import { NextResponse } from "next/server";
import { headers } from "next/headers";

//error handling only for API
function errorApi(errorObject){
    console.log('-----Unexpected Error-----')
    console.error(errorObject)
    return NextResponse.json({
        code:500,
        description: "Internal Server Error"
    },{status:500})
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
    //if route is docs don't require auth
    console.log('pathname is: ', request.nextUrl.pathname)
    if(request.nextUrl.pathname.startsWith('/docs')){
        console.log('is DOCS path')
        return NextResponse.next()
    }

    //only API calls
    try {
        if(!validateAuth(headers.Authorization)){
            console.log('failed auth')
            return NextResponse.json({
                code: 401,
                description: "Unauthorized"
            },{status:401})
        } else {
            console.log('correct auth')
            return NextResponse.next()
        }
    } catch {
        errorApi(error)
    }
    //redirect function
    //return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/api/:path*','/docs/:path*',]
}