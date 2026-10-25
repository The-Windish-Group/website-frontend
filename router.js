const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(public("index.hml"))
})

app.get("/word", (req, res) => {
    res.sendFile(public("word.html"))
})

// app.status(404).send(`<h1>Page not found</h1>`)

app.listen(8080, () => {
  console.log('Server is running on port 3000');
});

function public(file) {
    return path.join(__dirname, 'public', file)
}