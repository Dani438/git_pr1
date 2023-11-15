const express = require('express');
const path = require('path');
const app = express();
const dotenv = require ('dotenv');
dotenv.config();

const puerto = process.env.PORT || 3000;


//middelwares: funciones que estan entre la peticion y la respuesta
const miMiddelware = (req, res, next) => {
    console.log("Hola soy un middelware");
    next();
};


app.use(miMiddelware)
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res)=>{
    res.sendFile('index.html');
});


app.get('/ofertas', (req, res)=>{
    res.sendFile('ofertas.html');
});

app.listen(puerto,()=>{
    //if(err) console.log(err)
    console.log('SERVER RUNING IN PORT: http://localhost:'+ puerto);

});
