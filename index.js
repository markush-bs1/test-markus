const app = require('express')();

app.listen('/', (req, res) => {
    res.send("Hello World from Express")
})

port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Server listen on Port ${port}`)
})