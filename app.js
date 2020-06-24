const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const postRoute = require('./routes/posts');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/posts', postRoute);

app.get('/', (req, res) => {
    res.send('We are on home');
});

mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB Connected');
    })
    .catch((err) => {
        console.log('Error on start: ' + err.stack);
        process.exit(1);
    });

app.listen(3000);
