import express from 'express';
const router = express.Router();

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

router.get('/', cb0, cb1, cb2)

export default router;