import { z } from 'zod'
import { initContract } from '@ts-rest/core'

const c = initContract()

const PostSchema = z.object({
  language: z.string(),
  url: z.string(),
  content: z.string()
})

export const transcribeContract = c.router({
  transcribeVideo: {
    method: 'POST',
    path: '/transcribe',
    responses: {
      200: PostSchema
    },
    body: z.object({
      videoUrl: z.string()
    }),
    summary: 'Transcribe YouTube video by videoUrl'
  }
})
