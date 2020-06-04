var express = require('express');
var mysql = require('mysql');
var app = express();


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database:'googlemap'
});

connection.connect(function(error) {
  if(!!error){
    console.log('error');
  }
  else{
    console.log('connected');


  }
})
app.get('/', function(req, resp){

  connection.query("SELECT * FROM googlemaptable", function(error, rows, fields) {
    if(!!error){
      console.log('Error in the query');

    }
    else{
      console.log('Success');

      localStorage.setItem('tempLng', rows[0].Lng);
      localStorage.setItem('tempLng', rows[0].Lat);

    }
  })

})
app.listen(1337);