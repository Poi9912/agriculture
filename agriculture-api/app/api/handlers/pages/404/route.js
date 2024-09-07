import { NextResponse } from "next/server";

export function GET(request){
    console.log('serves page 404')
    return NextResponse.json({
        code:404,
        description:"Resource not found"
    },{status:404})
}