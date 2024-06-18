
const express = require('express');
const app = express();
const routes = require('./routes/routes');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

app.listen(3000);
