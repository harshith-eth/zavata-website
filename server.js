const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/blogs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blogs', 'blogs.html'));
});

app.get('/terms-of-service', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'terms-of-service.html'));
});

app.get('/ai-ethics-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ai-ethics-policy.html'));
});

app.get('/cookie-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cookie-policy.html'));
});

app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'privacy-policy.html'));
});

app.get('/blogs/zavata-launch', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blogs', 'blog1', 'launch.html'));
});


// Additional routes for new blog entries
app.get('/blogs/msft4startups', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blogs', 'blog2', 'msft.html'));
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
