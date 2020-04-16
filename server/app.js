require('dotenv').config();
const express = require('express');
const app = express();
const EXPRESS_PORT = process.env.EXPRESS_PORT;
const HTTP_PORT = process.env.HTTP_PORT;
const mainRoute = require('./routes/index');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use('/', mainRoute);

app.listen(EXPRESS_PORT, () => console.log(`app listen ${EXPRESS_PORT}`));
http.listen(HTTP_PORT, () => console.log(`HTTP listen on port ${HTTP_PORT}`));