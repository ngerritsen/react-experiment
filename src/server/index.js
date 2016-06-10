import express from 'express'
import { servicePlans } from './routes'

const app = express()

app.get('/service-plans', servicePlans)

app.listen(3000, () =>
  console.log('React render service listening on port 3000!'))
