const config = require('../config.js')
const axios = require('axios')


const getHandler = async(path,payload) => {
    let url = config.baseUrl + path
    payload ? url = url + '?' + payload : ''
    try {
        return await axios.get(url)
    } catch (error) {
        console.error('exception while GET',error)
        throw error
    }
}

const postHandler = async(path,payload) => {
    let url = config.baseUrl + path
    try {
        return await axios.post(url,payload)
    } catch (error) {
        console.error('exception while POST',error)
        throw error
    }
}

const putHandler = async(path,payload) => {
    let url = config.baseUrl + path
    try {
        return await axios.put(url,payload)
    } catch (error) {
        console.error('exception while PUT',error)
        throw error
    }
}

const deleteHandler = async(path,payload) => {
    let url = config.baseUrl + path + '?delById' + payload
    console.log('-------------------------------------------')
    console.log(url)
    console.log('*******************************************')
    try {
        return await axios.delete(url)
    } catch (error) {
        console.error('exception while DELETE',error)
        throw error
    }
}

const requestCall = async (method,path,payload) => {
    switch (method) {
        case 'GET':
            return await getHandler(path,payload)
        case 'POST':
            return await postHandler(path,payload)
        case 'PUT':
            return await putHandler(path,payload)
        case 'DELETE':
            return await deleteHandler(path,payload)
        default:
            let error = new Error('exception in Handler: '+ method, 'Not a supported http Method in handler')
            throw error;
    }
}

module.exports = {
    requestCall
}