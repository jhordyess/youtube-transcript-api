import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import { API_BASE_PATH, PORT } from './config'

import { errorHandler, healthCheckHandler, notFoundHandler } from './middlewares/handlers'
import { openApiRouter } from './routes/openApi'
import { apiRouter } from './routes/v1/router'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Homepage
app.get('/', (_, res) => {
  res.send('Hello World!')
})

// Health check
app.get('/health', healthCheckHandler)

// Routes
app.use(`/docs`, openApiRouter)
app.use(API_BASE_PATH, apiRouter)

// Error handler
app.use(errorHandler)

// Not found handler
app.use(notFoundHandler)

app.listen(PORT, () => {
  console.info(`Listening at http://localhost:${PORT}`)
})
