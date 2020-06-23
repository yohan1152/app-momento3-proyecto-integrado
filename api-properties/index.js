import express from 'express';
import mongoose from 'mongoose';
import app from './app';
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/propertyairbnb", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Conection ");
    app.listen(3000, () => {
        console.log('App listening on port 3000!');
    });

}).catch((error) =>{
    console.log(error);
})

