const express = require('express') //common js modules

//import express from 'express' //ex2015

const app = express();


app.get('/', (req,res) => {
  res.send({hi:'there we changed'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
