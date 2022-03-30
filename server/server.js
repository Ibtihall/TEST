/**
* @description <file to start server>
* @author <ibtihal el maghraoui>
*/
const express = require('express');
const winston = require('winston');

const PORT = process.env.PORT || 3001;

const app = express();

/**
* @description <accepted headers>
* @author <>
*/
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Authorization, Content-Type, Accept, token',
  );
  next();
});

/**
* @description <calling routes>
* @author <>
*/
app.use(
  '/',
  require('./src/routes/directoryRoutes.js'),
);
// error handler
app.use((err) => {
  winston.error('An error occured %o', err);
});

app.listen(PORT, () => {
  winston.info(`Server is listening on port ${PORT}`);
});

// export app to be used in routes folder
module.exports = app;
