import { NextResponse } from "next/server";

const responseDefinitions = [
    {code:400,details:"Bad Request"},
    {code:401,details:"Unauthorized"},
    {code:403,details:"Forbidden"},
    {code:404,details:"Resource not found"},
    {code:500,details:"Internal Server Error"},
    {code:502,details:"Unable to reach backend, please try again later"},
];

function getDetailsFromDefinitions (code){
    responseDefinitions.forEach(definition => {
        if(definition.code==code){
            return definition.details
        }
    })
    return undefined
}

function undefinedApiError(errorObject){
    console.log('-----Unexpected Error-----')
    console.error(errorObject)
    responseConstruction(500,getDetailsFromDefinitions(500))
}

function sendApiError (code) {
    responseConstruction(code,getDetailsFromDefinitions(code))
}

function responseConstruction (code, details){
    return NextResponse.json({
        code,
        description:details
    },{status:code})
}

module.exports = {
    sendApiError,
    undefinedApiError,
}