//handler /crops path 
import axios from "axios"
import { NextResponse } from "next/server"

let baseUrl = process.env.ENDPOINT
let envSB = process.env.ENV
envSB !== null ? envSB='sb' : ''
//console.log('environment is: '+ envSB)
envSB == 'sb' ? baseUrl='http://microcks:8080/rest/agriculture-api/1.0.0' : ''
//console.log(baseUrl)


//BACKEND CALLS
async function getCrops (request) {
    let url = baseUrl + '/crops'
    let getById = request.nextUrl.searchParams.get('getById')
    let req = url
    let query = '?'
    getById !== null ? req = req + query + 'getById=' + getById : ''
    
    //only for sandbox
    if(envSB=='sb'){
        req=url
    }

    console.log('the request url is: '+ req)
    try {
        let res = await axios.get(req)
        return res.data        
    } catch (error) {
        console.log(error)
        return(error)
    }
}

//API ROUTER EXPORTS
export async function GET(request){
    let resp = await getCrops(request)
    return NextResponse.json(resp,{status:200})
}