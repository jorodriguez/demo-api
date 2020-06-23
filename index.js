const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

// area de enpoint
app.get('/',(request,response)=>{
        response.json({info:' La API esta en ejecución '});
});

//usuarios
app.get('/usuario',(request,response)=>{
    response.json({id:1,nombre:'Joel',apellidos:'Rodriguez'});
});

app.listen(port,()=>{
   console.log(`API corriendo en el puerto ${port}`);
});


