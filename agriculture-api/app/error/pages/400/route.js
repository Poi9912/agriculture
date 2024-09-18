import { NextResponse } from "next/server";

export function GET(request){
    console.log('serves page 400')
    return NextResponse.json({
        code:400,
        description:"Bad Request"
    },{status:400})
}