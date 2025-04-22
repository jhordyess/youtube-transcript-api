import { z } from 'zod'
import { initContract } from '@ts-rest/core'
import { StatusCodes } from 'http-status-codes'

const c = initContract()

const PostSchema = z.object({
  url: z.string(),
  content: z.string()
})

export const transcribeContract = c.router({
  transcribeVideo: {
    method: 'POST',
    path: '/transcript',
    responses: {
      [StatusCodes.OK as number]: PostSchema,
      [StatusCodes.BAD_REQUEST as number]: z.object({
        error: z.string()
      })
    },
    body: z.object({
      videoUrl: z.string()
    }),
    summary: 'Obtain a transcript of a YouTube video'
  }
})
