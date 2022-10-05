const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

// create express application
const app = express();

// parse incoming json request to convert it into js object
app.use(bodyParser.json());

// create a colection of post: object
const posts = {}

app.get('/posts', (req, res) => {
    res.send(posts);
})

app.post('/posts', (req, res) => {
    // Generate random id for the post
    const id = randomBytes(4).toString('hex');

    // extract title from the body of the request
    const { title } = req.body;

    // create a new post: object
    posts[id] = {
        id, title
    }

    // send a 201 response back with the post created
    res.status(201).send(posts[id]);
})

// Put application to listen on port 4000
app.listen(4000, () => {
    console.log('Listening on port 4000');
});