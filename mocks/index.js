const axios = require('axios')

let baseUrlMicrocks = 'http://microcks:8080/api'
//request to start the import process into Microcks
async function postJobs () {
    console.log('post import job')
    let url = baseUrlMicrocks + '/jobs'
    let jobId = ''
    let req = {
        "name":"agriculture-api", //name inside microks controller
        "repositoryUrl":"https://raw.githubusercontent.com/Poi9912/agriculture/main/agriculture-api/public/openapi/agriculture-api.json", //openapi definition in repository url
        "active": true //requires true to start enrollment
    }
    try {
        let res = await axios.post(url,req)
        //console.log(res)
        jobId = res.data.id
    } catch (error) {
        console.log(error)
        return(error)
    }
    return jobId
}

async function startJob () {

    let jobId = await postJobs()
    let url = baseUrlMicrocks + '/jobs' + '/' + jobId + '/start'
    let status = 0

    console.log('put start job')
    try {
        let res = await axios.put(url)
        status = res.status
    } catch (error) {
        console.log(error)
        return error
    }

    (status!=200) ? console.log('falla en proceso de import') : console.log('proceso import completado')

    return 0
}

function run (){
    new Promise(resolve => startJob())
}

run()