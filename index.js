const express = require('express');
const mongoose = require('mongoose');
const constants = require('./config')

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ status: true, data: { title: 'hello world' } });
});

app.post('/', (req, res) => {
    res.status(200).json({ status: true });
});

mongoose.connect(constants?.DB_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then((res) => {
    console.log('[db]: Connected successfully')
}).catch((err) => {
    console.log('error:', err);
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`[server]: Server is running at port ${PORT}`)
})