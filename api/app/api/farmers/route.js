import axios from 'axios'
import { handleResponse } from '../apiHandler.js'

const baseUrl = process.env.ENDPOINT ? process.env.ENDPOINT : 'http://microcks:8080/rest/agriculture-api/1.0.0'
const envSB = process.env.ENV ? process.env.ENV : 'sb'
const timeout = process.env.TIMEOUT ? process.env.TIMEOUT : 10
const operationId = '/farmers'

//BACKEND CALLS
//get
async function getHandler(request) {
    let url = baseUrl + operationId
    let getByFarmersClossestMarketId = request.nextUrl.searchParams.get('getByFarmersClossestMarketId')
    let getByFarmLocationId = request.nextUrl.searchParams.get('getByFarmLocationId')
    let getById = request.nextUrl.searchParams.get('getById')
    let req = url
    let query = '?'
    getById !== null ? req = req + query + 'getById=' + getById + '&' : ''
    getByFarmLocationId !== null ? req = req + query + 'getByFarmLocationId=' + getByFarmLocationId + '&' : ''
    getByFarmersClossestMarketId !== null ? req = req + query + 'getByFarmersClossestMarketId=' + getByFarmersClossestMarketId + '&' : ''
    
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

//post
async function postHandler(request){
    let url = baseUrl + operationId
    let req = url
    let payload = await request.json()
    
    let res = undefined
    try{
        res = await axios.post(req,payload,{timeout})
    } catch (error) {
        res = {data:error,status:500}
    }
    return handleResponse(request.url,res.data,res.status)
}

//put
async function putHandler(request){
    let url = baseUrl + operationId
    let req = url
    let payload = await request.json()
    
    let res = undefined
    try{
        res = await axios.put(req,payload,{timeout})
    } catch (error) {
        res = {data:error,status:500}
    }
    return handleResponse(request.url,res.data,res.status)
}
//delete
async function deleteHandler(request){
    let url = baseUrl + operationId
    let delById = request.nextUrl.searchParams.get('delById')
    let req = url
    let query = '?'
    delById !== null ? req = req + query + 'delById=' + delById : ''
    
    //only for sandbox
    if(envSB=='sb'){
        req=url
        return handleResponse(request.url,null,204)
    }

    let res = undefined
    try{
        res = await axios.delete(req,{timeout})
    } catch (error) {
        res = {data:error,status:500}
    }
    return handleResponse(request.url,res.data,res.status)
}

//API ROUTER EXPORTS
async function GET(request){
    return await getHandler(request)
}

async function POST(request){
    return await postHandler(request)
}

async function PUT(request){
    return await putHandler(request)
}

async function DELETE(request){
    return await deleteHandler(request)
}

module.exports = {
    GET,POST,PUT,DELETE
}