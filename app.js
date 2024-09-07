// app.js

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRoute = require('./routes/index');
app.use('/', indexRoute);

// Start the server
app.listen(port, () => {
    console.log('Server running at http://localhost:${port}');
});