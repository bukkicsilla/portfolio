//console.log('My portfolio with Express')
const express = require('express');
const app = express();
const path = require('path');

console.log('dirname ' , __dirname)
app.use(express.static(path.join(__dirname, 'public')));
/*app.get('/', function(req, res) {
  res.send('Hello World')
})*/

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function() {
  console.log('listening on 3000')
})
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})

