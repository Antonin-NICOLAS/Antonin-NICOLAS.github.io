const express = require('express')
const app = express()

app.use(express.static('dist'))

const port = process.env.VITE_APP_PORT || 8080
const host = process.env.VITE_APP_HOST || 'localhost'

app.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}`)
})