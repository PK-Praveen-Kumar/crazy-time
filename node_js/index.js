const express = require('express')
const app = express()
const port = 4000


//xpCxdZjFpgiGOIUd   possword of mongodb database
app.get('/', (req, res) => {
  res.send('Hello Honey!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})