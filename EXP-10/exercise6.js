const express = require('express');
const app = express();
const port = 4001;

// 1. MIDDLEWARE (The Logger)
// This MUST be defined before your app.get routes
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleTimeString();
    // This will print in your VS Code / CMD Terminal
    console.log(`[${timestamp}] Method: ${req.method} | URL: ${req.url}`);
    
    // next() tells Express to move to the actual route handler
    next(); 
});

// 2. ROUTES
app.get('/', (req, res) => {
    res.send('<h1>Middleware Practice</h1><p>Check your terminal to see the logs!</p>');
});

app.get('/api/user', (req, res) => {
    res.json({
        name: "SFIT Student",
        status: "Middleware is working!"
    });
});

app.get('/help', (req, res) => {
    res.send('Help page accessed.');
});

// 3. START SERVER
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('--- Terminal Logs will appear below ---');
});