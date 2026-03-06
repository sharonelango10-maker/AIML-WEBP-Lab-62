const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('This is the Home Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact us at: contact@sfit.ac.in');
});

app.get('/help', (req, res) => {
    res.send('How can we help you today?');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});