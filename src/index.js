const express = require('express');

const port = 3000;
const app = express();
const userRoutes = require('./routes/user');
const middlewareLogs = require('./middleware/log')

app.use(middlewareLogs);

app.use("/user", userRoutes);

app.use("/", (req, res) => {
    res.send('Hello, you are in Nasikin BE trial...')
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});