const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const app = express()

const fs = require('fs')
const number = "number.json"

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/number', (req, res) => {
  fs.readFile('number.json', 'utf8', (err, data) => {
      if (err){
        return res.send(err)
      }
      console.log(JSON.parse(data))

      res.send(data)
  })
})



const writeFile = (filename, data, res) => {
  fs.writeFile(filename, data, (err) => {
    if (err) {
      return res.send(err)
    }
    res.send('success')
  })
}

const port = 3000;
app.listen(port, () => {
  console.log(`listening to port ${port}`)
});