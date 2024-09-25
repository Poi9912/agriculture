const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: './cucumber.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    name:'Agriculture API',
    brandTitle:'REST API Test',
    metadata: {
        "App Version":"1.0.0",
        "Test Environment": "container",
        "Browser": "Chrome  54.0.2840.98",
        "Executed": "Remote"
    }
};

reporter.generate(options);