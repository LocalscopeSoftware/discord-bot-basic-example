const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const startBot = require('./app');

startBot();

app.get('/', (req, res) => {
    res.send('Buddy bot is running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));