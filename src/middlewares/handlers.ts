import type { ErrorRequestHandler, RequestHandler } from 'express'
import { StatusCodes as SC } from 'http-status-codes'

export const healthCheckHandler: RequestHandler = (_, res) => {
  res.status(SC.OK).send('API is running...')
}

export const errorHandler: ErrorRequestHandler = (err, _, res, next) => {
  if (!err) return next()

  console.error(err)

  const status = SC.INTERNAL_SERVER_ERROR
  const error = 'SERVER ERROR'
  const details = undefined

  res.status(status).json({ error, details })
}

export const notFoundHandler: RequestHandler = (_, res) => {
  res.status(SC.NOT_FOUND).send('Not found')
}
