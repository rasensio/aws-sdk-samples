var AWS = require("aws-sdk");

AWS.config.getCredentials(function (err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
    console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
    AWS.config.region = 'us-east-1'
    console.log("Region: ", AWS.config.region);
  }
});

// get actual cost and usage
var costexplorer = new AWS.CostExplorer();

var params = {
  TimePeriod: { /* required */
    End: '2019-12-19', /* required */
    Start: '2019-12-01' /* required */
  },
  Granularity: 'DAILY',
  Metrics: [
    'AmortizedCost',
  ],
};
costexplorer.getCostAndUsage(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(JSON.stringify(data));           // successful response
});
