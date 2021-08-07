import express from 'express';

const router = express.Router();

router.use(express.json());

let items = [1, 2, 3, 4, 5];

router.get('/items', (req, res) => {
    res.send(items);
})

router.post('/item', (req, res) => {
    var value = req.body.item;
    items.push(value);
    res.send(`The value ${value} inseted`);
})

router.put('/item', (req, res) => {

    res.send(`...`);
})

router.delete('/item', (req, res) => {
    var value = items.pop();
    res.send(`The value is ${value}`)
})

export default router;