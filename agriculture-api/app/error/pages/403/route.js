import { NextResponse } from "next/server";

export function GET(request){
    console.log('serves page 403')
    return NextResponse.json({
        code:403,
        description:"Forbidden"
    },{status:403})
}