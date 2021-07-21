import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/page1', (req, res) => {
    res.send('hii i`m page 1!')
})

app.get('/page2', (req, res) => {
    res.send('hii i`m page 2!')
})

app.get('/page3', (req, res) => {
    res.send('hii i`m page 3!')
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})