const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello IS 23/9-3 and 24/11!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})