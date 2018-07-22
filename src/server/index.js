import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
const server = http.Server(app)

server.listen(3000)
console.log('listening on :3000')
