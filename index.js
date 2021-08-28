
const express = require('express')


const app = express()

app.use(express.static('./'))


app.listen(9001, () => {
  console.log('app now listening for requests!!!')
})
