require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT;
const URL = process.env.URL;

app.use(express.json());

app.use('/player', require('./router/player'));

const start = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(
            URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
            console.log('Connected to MongoDB')
        );
        app.listen(port, () => {
            console.log('Server started on port ', port);
        });
    } catch (e) {
        console.log(e);
    }
};

start();