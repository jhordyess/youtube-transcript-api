import { z } from 'zod'
import { initContract } from '@ts-rest/core'
import { StatusCodes } from 'http-status-codes'

const c = initContract()

export const pingContract = c.router({
  ping: {
    method: 'GET',
    path: '/ping',
    responses: {
      [StatusCodes.OK as number]: z.object({
        message: z.string()
      })
    },
    summary: 'Ping endpoint to check server health'
  }
})
