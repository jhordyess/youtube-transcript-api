import { initServer } from '@ts-rest/express'
import { pingContract } from './contract'

const s = initServer()

export const pingRouter = s.router(pingContract, {
  ping: async () => ({
    status: 200,
    body: {
      message: 'Pong!'
    }
  })
})
