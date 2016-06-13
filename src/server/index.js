import express from 'express'
import { servicePlans } from './routes'

const PORT = 9001
const app = express()

app.get('/service-plans', servicePlans)

app.listen(PORT, () =>
  console.log('React render service listening on port ' + PORT + '!'))
