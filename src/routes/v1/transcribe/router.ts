import { initServer } from '@ts-rest/express'
import { YoutubeTranscript } from 'youtube-transcript'

import { transcribeContract } from './contract'

const s = initServer()

export const transcribeRouter = s.router(transcribeContract, {
  transcribeVideo: async ({ body }) => {
    const transcript = await YoutubeTranscript.fetchTranscript(body.videoUrl)

    return {
      status: 200,
      body: {
        url: body.videoUrl,
        content: transcript.map(item => item.text).join('\n'),
        language: 'English'
      }
    }
  }
})
