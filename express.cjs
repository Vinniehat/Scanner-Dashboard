const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the Vue built files
app.use(express.static(path.join(__dirname, 'dist')));


// Route all other requests to the Vue app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
