const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3000;

const app = express();

async function start(){
	try{
		mysql.createConnection({
			host: 'localhost',
			user: 'root',
			database: 'store'
		})
		app.listen(PORT, () => {
			console.log('Server has been started');
		})
	}catch{
		console.log(e)
	}
}

start()

// connection.end(function(e) {
// 	if (e) {
// 	  console.log("Error: " + e.message);
// 	}
// 	console.log("Connection closed");
//   });