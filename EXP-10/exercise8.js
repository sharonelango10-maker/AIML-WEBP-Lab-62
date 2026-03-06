const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Home Page'));

// This MUST be the last route in your code
app.use((req, res) => {
    res.status(404).send('Page Not Found - Custom 404');
});

app.listen(5001, () => console.log('404 Server running...'));