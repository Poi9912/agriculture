import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json({
        code:200,
        data:"hello world"
    },{status:200})
}