import { NextResponse } from "next/server";

export function GET(request){
    console.log('serves page 502')
    return NextResponse.json({
        code:502,
        description:"Unable to reach backend, please try again later"
    },{status:502})
}