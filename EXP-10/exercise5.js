const express = require('express');
const app = express();

app.get('/api/user', (req, res) => {
    // res.json automatically sets the Content-Type to application/json
    res.json({
        name: "Student Name",
        age: 20,
        course: "AI & Machine Learning"
    });
});

app.listen(3001, () => console.log('JSON Server running on port 3001'));