//handler /crops path 
import axios from 'axios'
import { NextResponse } from 'next/server'
import { handleResponse } from '../handlers/apiHandler.js'

const baseUrl = process.env.ENDPOINT ? process.env.ENDPOINT : 'http://microcks:8080/rest/agriculture-api/1.0.0'
const envSB = process.env.ENV ? process.env.ENV : 'sb'
const timeout = process.env.TIMEOUT ? process.env.TIMEOUT : 10

//BACKEND CALLS
//get
async function getCrops(request) {
    let url = baseUrl + '/crops'
    let getById = request.nextUrl.searchParams.get('getById')
    let req = url
    let query = '?'
    getById !== null ? req = req + query + 'getById=' + getById : ''
    
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
async function postCrops(request){
    let url = baseUrl + '/crops'
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
async function putCrops(request){
    let url = baseUrl + '/crops'
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
async function deleteCrops(request){
    let url = baseUrl + '/crops'
    let deleteById = request.nextUrl.searchParams.get('deleteById')
    let req = url
    let query = '?'
    deleteById !== null ? req = req + query + 'deleteById=' + deleteById : ''
    
    //only for sandbox
    if(envSB=='sb'){
        req=url
        return NextResponse.json('',{status:204})
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
    return await getCrops(request)
}

async function POST(request){
    return await postCrops(request)
}

async function PUT(request){
    return await putCrops(request)
}

async function DELETE(request){
    return await deleteCrops(request)
}

module.exports = {
    GET,POST,PUT,DELETE
}