const express =require('express');
const bodyParser=require('body-parser');

const phonewords=require('./routes/api/phonewords');

const app =express();
//body Parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//use Routes
app.use('/api/phonewords',phonewords);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
const port =process.env.PORT || 5000;

app.listen(port,()=> console.log(`Sever running on port ${port}`));