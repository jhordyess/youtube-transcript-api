import { initServer } from '@ts-rest/express'
import { StatusCodes } from 'http-status-codes'

import { pingContract } from './contract'

const s = initServer()

export const pingRouter = s.router(pingContract, {
  ping: async () => ({
    status: StatusCodes.OK,
    body: {
      message: 'Pong!'
    }
  })
})
