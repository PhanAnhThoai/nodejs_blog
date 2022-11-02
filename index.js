const express = require('express')
const app = express()
const port = 3000
app.get('/',  (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    return res.send('Hello World!');
})  
//app.get('/', (req, res) => res.send('Hello World !\n This is tutorial about Reverse Proxy!\n'))
app.listen(port, () => console.log('Node.js app listening on port 3000.'))  