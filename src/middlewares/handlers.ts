import type { ErrorRequestHandler, RequestHandler } from 'express'

export const healthCheckHandler: RequestHandler = (_, res) => {
  res.status(200).send('API is running...')
}

export const errorHandler: ErrorRequestHandler = (err, _, res, next) => {
  if (!err) return next()

  console.error(err)

  const status = 500
  const error = 'SERVER ERROR'
  const details = undefined

  res.status(status).json({ error, details })
}

export const notFoundHandler: RequestHandler = (_, res) => {
  res.status(404).send('Not found')
}
