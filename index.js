const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3000;
const app = express();

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'store'
});

connection.connect();

connection.query('SELECT * from auth');
connection.end();
