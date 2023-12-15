const express = require('express');

const port = 3000;
const app = express();

app.use("/", (req, res) => {
    res.send('Hello, you are in Nasikin BE trial...')
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});