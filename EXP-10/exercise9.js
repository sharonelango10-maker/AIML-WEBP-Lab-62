const express = require('express');
const app = express();
const port = 8000; // Your chosen port

// 1. Logger Middleware (Runs for every request)
app.use((req, res, next) => {
    console.log(`[LOG]: ${req.method} request to ${req.url}`);
    next(); // Moves to the next section
});

// 2. SUCCESS ROUTE (Test Case A)
// This MUST come before the 404 handler
app.get('/api/data', (req, res) => {
    res.json({ 
        message: "Test Case A: Success!", 
        status: "Route Found" 
    });
});

// 3. 404 HANDLER (Test Case B)
// This is the "Safety Net" - it only runs if no routes above matched
app.use((req, res) => {
    console.log(`[404]: No match for ${req.url}`);
    res.status(404).send("Analysis: 404 Not Found - Route does not exist.");
});

app.listen(port, () => {
    console.log(`🚀 Master Server running at http://localhost:${port}`);
    console.log(`Try Test A: http://localhost:${port}/api/data`);
});