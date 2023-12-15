require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;
const app = express();

const middlewareLogs = require('./middleware/log')
const userRoutes = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(middlewareLogs);

app.use("/user", userRoutes);

app.use("/", (req, res) => {
    res.send('Hello, welcome to my trial node js');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});