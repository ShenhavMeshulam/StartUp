import express from 'express';
const router = express.Router();

router.get('/json', (req, res) => {
    var value = {
        "item": 222222,
        "shenhav": "meshulam"
    };
    res.send(value);
})

router.get('/json2 ', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }));
})


export default router;