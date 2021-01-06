const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3000;
const app = express();

// async function start() {
// 	try {
// 		const connection = mysql.createPool({
// 			host: 'localhost',
// 			user: 'root',
// 			database: 'store'
// 		});
// 		app.listen(PORT, () => {
// 			console.log('Server has been started...');
// 		});
// 	} catch (e) {
// 		console.log(e);
// 	}
// }

// start();

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'store'
});

connection.connect();

connection.query('SELECT * from auth');
connection.end();
