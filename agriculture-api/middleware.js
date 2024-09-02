import { NextResponse } from "next/server";


//const isLoggedIn = false;

export function middleware(request){
    let headers = new Headers(request.headers)
    console.log(headers)
    /*if(isLoggedIn){
        return NextResponse.next()
    }*/
   // only on case of not auth
    //return NextResponse.redirect(new URL('/', request.url))

    //always goes next()
    return NextResponse.next()

}

export const config = {
    matcher: ['/api/:path*'],

}