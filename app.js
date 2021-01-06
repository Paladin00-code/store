const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); //для обработки запросов с других доменов
// const morgan = require('morgan'); //красиво логирует запросы
const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');
const keys = require('./config/keys');
const app = express();

mongoose
	.connect(keys.mongoURL, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(() => console.log('MongoDb connected'))
	.catch((error) => console.log(error));

app.use(require('morgan')('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

module.exports = app;