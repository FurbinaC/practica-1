const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(port,() => {
    console.log('Servidor escuchando en puerto 8080')
});