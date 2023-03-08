const express = require('express')
const app = express()

app.use(express.static('dist'))

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

app.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}`)
})