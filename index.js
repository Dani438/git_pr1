const express = require('express');
const app = express();

require('dotenv').config({path:'./.env'});

const puerto = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(puerto,()=>{
    console.log('SERVER RUNING IN PORT: http://localhost:'+ puerto);

});
