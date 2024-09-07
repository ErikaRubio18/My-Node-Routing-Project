// routes/index.js

const express = require('express');
const router = express.Router();

// Get method route for the homepage
router.get('/', (req, res) => {
    res.render('index', {title: 'Welcome to the Node.js Routing Project' });
});

// Post method route (example
router.post('/submit', (req, res) => {
    res.send('POST request received');
});

// PUT method route (example)
router.put('/update', (req, res) => {
    res.send('PUT request received');
});

// DELETE method route (example)
router.delete('/delete', (req, res) => {
    res.send('DELETE request received');
});

module.exports = router;