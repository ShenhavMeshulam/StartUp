import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(cors());

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

///////////////////////////////////
app.use(bodyParser.json());

let items = [1, 2, 3, 4, 5];

app.get('/items', (req, res) => {
    res.send(items);
})

app.post('/item', (req, res) => {
    var value = req.body.item;
    items.push(value);
    res.send(`The value ${value} inseted`);
})

app.put('/item', (req, res) => {

    res.send(`The stack update`);
})

app.delete('/item', (req, res) => {
    var value = items.pop();
    res.send(`The value is ${value}`)
})
/////////////////////////////////


app.get('/json', (req, res) => {
    var value = {
        "item": 222222,
        "shenhav": "meshulam"
    };
    res.send(value);
})

app.get('/json2 ', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }));
})

/////////////////////////////////
var cb0 = function (req, res, next) {
    try {
        console.log('CB0')
    }
    catch {
        throw 'Parameter is not a number!';
    }
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

var cb2 = function (req, res) {
    res.send('Hello from C!')
}

app.get('/example/c', cb0, cb1, cb2)

/////////////////////////////////

app.use(function (req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. try some other route :)");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

