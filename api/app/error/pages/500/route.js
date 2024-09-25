import { NextResponse } from "next/server";

export function GET(request){
    console.log('serves page 500')
    return NextResponse.json({
        code:500,
        description:"Internal Server Error"
    },{status:500})
}