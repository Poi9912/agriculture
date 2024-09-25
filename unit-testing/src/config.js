const baseUrl = process.env.BASEURL ? process.env.BASEURL : 'http://localhost:3000'
const env = process.env.ENV ? process.env.ENV : 'localtesting'

module.exports = {
    baseUrl,
    env,
}
