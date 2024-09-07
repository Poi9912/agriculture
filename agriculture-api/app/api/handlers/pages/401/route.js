import { NextResponse } from "next/server";

export function GET(request){
    console.log('serves page 401')
    return NextResponse.json({
        code:401,
        description:"Unauthorized"
    },{status:401})
}