import { NextResponse } from "next/server";

//auth function for the api
function validateAuth(token){
    const valid = true //mocked for now
    console.log('validateAuth')
    return valid
}
//const isLoggedIn = false;

export function middleware(request){
    let headers = new Headers(request.headers)
    console.log(headers)

    /*if(isLoggedIn){
        return NextResponse.next()
    }*/

    //if route is not api
    /*if(!request.nextUrl.pathname.startsWith('/api/:path*')){
        return NextResponse.next()
    }*/
    
    //verify auth
    if(!validateAuth(headers.Authorization)){
        console.log('failed auth')
        return NextResponse.json({
            code: 401,
            description: "Unauthorized"
        },{status:401})
    } else {
        return NextResponse.next()
    }

    //always goes next()
    


    // only on case of not auth
    //return NextResponse.redirect(new URL('/', request.url))

}

export const config = {
    matcher: ['/:path*'],

}