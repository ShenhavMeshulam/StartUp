import express from 'express';
const router = express.Router();

router.get('/1', (req, res) => {
    var value = {
        "item": 222222,
        "shenhav": "meshulam"
    };
    res.send(value);
})

router.get('/2 ', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }));
})


export default router;