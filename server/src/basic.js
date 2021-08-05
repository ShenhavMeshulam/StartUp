import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get('/page1', (req, res) => {
    res.send('hii i`m page 1!')
})

router.get('/page2', (req, res) => {
    res.send('hii i`m page 2!')
})

router.get('/page3', (req, res) => {
    res.send('hii i`m page 3!')
})

export default router;