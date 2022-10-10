const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('ini test')
})

app.get('/skuy', (req, res) => {
  res.send('ignaways')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})