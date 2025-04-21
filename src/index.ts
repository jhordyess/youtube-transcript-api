import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import { port } from './config'

const app = express()

app.use(morgan('dev'))
app.use(cors())

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
