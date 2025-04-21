import { DEV_HOST, PROD_HOST } from '@/config'
import { generateOpenApi } from '@ts-rest/open-api'
import { contract } from '@/contract'

export class OpenAPI {
  private static instance: object

  public static getInstance() {
    if (!OpenAPI.instance) {
      OpenAPI.instance = generateOpenApi(
        contract,
        {
          openapi: '3.0.0',
          info: {
            title: 'Youtube Transcript API',
            description: 'API for transcribing YouTube videos',
            version: '1.0.0'
          },
          servers: [
            {
              url: DEV_HOST,
              description: 'Development server'
            },
            {
              url: PROD_HOST,
              description: 'Production server'
            }
          ]
        },
        {
          setOperationId: true
        }
      )
    }

    return OpenAPI.instance
  }
}
