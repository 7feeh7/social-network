const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3333;

// Defined routes
const users = require('./routes/users');
const posts = require('./routes/posts');

// Request data processing...
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allows a website to access resources from another website, even across different domains.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Call routes
app.use(users);
app.use(posts);

app.listen(port, () => {
    console.log(`Servidor executando na porta: ${port}.`);
});