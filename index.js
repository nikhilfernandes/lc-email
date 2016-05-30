var express = require('express');
var bodyParser = require('body-parser');
var ses = require('node-ses'), 
client = ses.createClient({ key: '', secret: '' });
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

app.post('/', function (req, res) {
  client.sendEmail({to: req.body.email_to, from: 'help@lovecycles.me', subject: 'greetings', message: 'your <b>message</b> goes here', altText: 'plain text'}, function (err, data, re) {
    res.send('Sent!');
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});