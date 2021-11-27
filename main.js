
const express = require('express')
const app = express()
const port = 3000

// Req es la petición lo que pide el navegador al servidor
// Res es la respuesta objeto que se usa para contestar al navegador
app.get('/',(req,res) => {
    // La respuesta
    res.send('HELLO WORLD')
})

app.listen(port, () => {
    console.log((`Example app listening at http://localhost:${port}`))
})