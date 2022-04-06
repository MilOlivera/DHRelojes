const express = require('express');
const app = express();
const path = require('path')

const publicPath = path.resolve(__dirname, "./public")

app.use(express.static(publicPath));

app.listen(3033, () => {
    console.log("Servidor Corriendo")
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/views/index.html'))
})
app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname + '/views/login.html'))
})

app.get('/registro', function(req, res){
    res.sendFile(path.join(__dirname + '/views/registro.html'))
})