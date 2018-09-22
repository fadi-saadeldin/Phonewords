const express =require('express');
const bodyParser=require('body-parser');

const phonewords=require('./routes/api/phonewords');

const app =express();
//body Parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//use Routes
app.use('/api/phonewords',phonewords);


const port =process.env.PORT || 5000;

app.listen(port,()=> console.log(`Sever running on port ${port}`));