import express from 'express';
import cors from 'cors';

import basic from './basic';
import CRUD from './CRUD';
import json from './json';
import errorHendleAndNumFunc from './errorHendleAndNumFunc';

const app = express();
const port = 3000;

app.use(cors());

app.use('/basic', basic);
app.use('/CRUD', CRUD);
app.use('/json', json);
app.use('/errorHendleAndNumFunc', errorHendleAndNumFunc);


app.use(function (req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. try some other route :)");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

