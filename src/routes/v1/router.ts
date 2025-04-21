import { Router } from 'express'
import { createExpressEndpoints } from '@ts-rest/express'

import { contract } from '@/contract'
// All the routes are imported here:
import { transcribeRouter } from './transcribe/router'
import { pingRouter } from './ping/router'

const router = {
  ...transcribeRouter,
  ...pingRouter
}

const apiRouter = Router()

createExpressEndpoints(contract, router, apiRouter)

export { apiRouter }
