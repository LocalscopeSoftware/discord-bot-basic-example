const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const startBot = require('./app');

startBot();

app.get('/', (req, res) => {
    res.send('Bot is running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));