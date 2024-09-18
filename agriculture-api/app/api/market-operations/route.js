import axios from 'axios'
import { handleResponse } from '../apiHandler.js'

const baseUrl = process.env.ENDPOINT ? process.env.ENDPOINT : 'http://microcks:8080/rest/agriculture-api/1.0.0'
const envSB = process.env.ENV ? process.env.ENV : 'sb'
const timeout = process.env.TIMEOUT ? process.env.TIMEOUT : 10
const operationId = '/market-operations'

//BACKEND CALLS
//get
async function getHandler(request) {
    let url = baseUrl + operationId
    let getByMarketId = request.nextUrl.searchParams.get('getByMarketId')
    let getByOperation = request.nextUrl.searchParams.get('getByOperation')
    let getByProductId = request.nextUrl.searchParams.get('getByProductId')
    let req = url
    let query = '?'
    getByMarketId !== null ? req = req + query + 'getByMarketId=' + getByMarketId + '&' : ''
    getByOperation !== null ? req = req + query + 'getByOperation=' + getByOperation + '&' : ''
    getByProductId !== null ? req = req + query + 'getByProductId=' + getByProductId + '&' : ''
    
    //only for sandbox
    if(envSB=='sb'){
        req=url
    }

    let res = undefined
    try{
        res = await axios.get(req,{timeout})
    } catch (error) {
        res = {data:error,status:500}
    }
    return handleResponse(request.url,res.data,res.status)

}

//API ROUTER EXPORTS
async function GET(request){
    return await getHandler(request)
}

module.exports = {
    GET
}