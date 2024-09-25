const {Given, When, Then} = require('cucumber');
const assert = require('assert').strict
const handler = require('../util/requestHandler.js');


//get all list
Given('A get all {string}', function(name) {
    this.name = name
})

//get by property
Given('A get request with {string} {string}', function(property,value) {
    let req = property + '=' + value
    this.request = req
})

//register
Given('A new {string}', function(request) {
    this.request = JSON.parse(request);
})

//modify
Given('A modify {string}', function(request) {
    this.request = JSON.parse(request);
})

//delete
Given('A delete request by {int}', function(id) {
    this.request = id
})
//executer

When('I send GET request to {string}', async function (path) {
    let response = undefined
    if(this.name){
        response = await handler.requestCall('GET', path, null)
    } else {
        response = await handler.requestCall('GET', path, this.request)
    }
    this.response = response;
})

When('I send POST request to {string}', async function (path) {
    let response = await handler.requestCall('POST', path, this.request)
    this.response = response;
})

When('I send PUT request to {string}', async function (path) {
    let response = await handler.requestCall('PUT', path, this.request)
    this.response = response;
})

When('I send DELETE request to {string}', async function (path) {
    let response = await handler.requestCall('DELETE', path, this.request)
    this.response = response;
})

Then('I get response code {int}', async function (code) {
    assert.equal(this.response.status, code);
});