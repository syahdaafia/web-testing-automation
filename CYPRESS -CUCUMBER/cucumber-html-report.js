const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'cypress/cucumber-reports',       // Lokasi file JSON hasil test
  reportPath: 'cypress/cucumber-reports/cucumber-htmlreport.html',    // Lokasi hasil report HTML
  metadata: {
    browser: {
      name: 'chrome',
      version: '138.0.7204.169', 
    },
    device: 'Acer Aspire A514-52G (i5-10210U, 12GB RAM)', 
    platform: {
      name: 'windows',
      version: '11 Home Single Language (Build 22631)',
    }
  },
  customData: {
    title: 'Cypress Cucumber Test Report',
    data: [
      { label: 'Project', value: 'Rahul Shetty Academy Project' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Cycle', value: 'Regression Test - July 2025' },
      { label: 'Executed By', value: 'Syahda Afia' },
      { label: 'Execution Environment', value: 'Local - Cypress + Cucumber BDD' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() },
      { label: 'Execution End Time', value: new Date().toLocaleString() },
    ]
  }
});
