const express = require('express');
const app = express();
const PORT = 3000;

// The "Hello World" Route
app.get('/', (req, res) => {
  res.send('Hello World! Your Express server is alive.');
});
app.get('/api/hello', (req, res) => {
  res.json({
    message: "Hello World",
    status: "Success",
    timestamp: new Date()
  });
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});