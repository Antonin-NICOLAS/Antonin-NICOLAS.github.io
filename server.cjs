const express = require('express')
const app = express()

app.use(express.static('dist'))

const port = process.env.PORT || 8000
const host = process.env.HOST || 'localhost'

//const server = app.listen(process.env.PORT || 8080, () => {
//const port = server.address().port;
//const host = server.address().address;

app.listen(port, host, () => {
  console.log(`Server listening at http://${host}:${port}`)
});
//})