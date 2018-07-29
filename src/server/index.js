import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'

import scrapeCtrl from './scrapeCtrl'

const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
const server = http.Server(app)

/** Route plan -- START */
app.post('/route-plan', scrapeCtrl.getRoutePlan)
/** Route plan -- END */

server.listen(3000)
console.log('listening on :3000')
