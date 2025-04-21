import { z } from 'zod'
import { initContract } from '@ts-rest/core'

const c = initContract()

export const pingContract = c.router({
  ping: {
    method: 'GET',
    path: '/ping',
    responses: {
      200: z.object({
        message: z.string()
      })
    },
    summary: 'Ping endpoint to check server health'
  }
})
