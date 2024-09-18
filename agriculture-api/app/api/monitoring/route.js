import axios from 'axios'
import { handleResponse } from '../apiHandler.js'

const baseUrl = process.env.ENDPOINT ? process.env.ENDPOINT : 'http://microcks:8080/rest/agriculture-api/1.0.0'
const envSB = process.env.ENV ? process.env.ENV : 'sb'
const timeout = process.env.TIMEOUT ? process.env.TIMEOUT : 10
const operationId = '/monitoring'

//BACKEND CALLS
//head
async function headHandler(request) {
    return handleResponse(request.url,null,204)
}

//API ROUTER EXPORTS
async function HEAD(request){
    return await getHandler(request)
}

module.exports = {
    headHandler
}