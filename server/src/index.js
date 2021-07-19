const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/WorkLogs', (req, res) => {
    res.send('Work Logs')
})

app.get('/Workers', (req, res) => {
    res.send('Workers')
})

app.get('/Sites', (req, res) => {
    res.send('Hello World!')
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})