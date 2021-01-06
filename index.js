const app = require('./app');
const port = process.env.PORT || 5000;
const express = require('express');
// const mysql = require('mysql2');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server has been started on ${port}`));
// const connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'store'
// });

// connection.connect();

// connection.query('SELECT * from auth');
// connection.end();
