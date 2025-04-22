import { initServer } from '@ts-rest/express'
import { YoutubeTranscript } from 'youtube-transcript'
import { StatusCodes } from 'http-status-codes'

import { transcribeContract } from './contract'

const s = initServer()

export const transcribeRouter = s.router(transcribeContract, {
  transcribeVideo: async ({ body }) => {
    const urlPattern = /^https:\/\/(www\.youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}$/

    if (!urlPattern.test(body.videoUrl)) {
      return {
        status: StatusCodes.BAD_REQUEST,
        body: {
          error:
            'Invalid YouTube URL, expected format: https://www.youtube.com/watch?v=<VIDEO_ID> or https://youtu.be/<VIDEO_ID>'
        }
      }
    }

    const transcript = await YoutubeTranscript.fetchTranscript(body.videoUrl)

    return {
      status: StatusCodes.OK,
      body: {
        url: body.videoUrl,
        content: transcript.map(item => item.text).join('\n')
      }
    }
  }
})
