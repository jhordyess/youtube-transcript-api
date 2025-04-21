import { Router } from 'express'
import { serve, setup } from 'swagger-ui-express'

import { OpenAPI } from '@/classes/openApi'

const openApiRouter = Router()

openApiRouter.get('/json', async (_, res, next) => {
  try {
    const specObject = OpenAPI.getInstance()
    if (!specObject) throw new Error('OpenAPI spec not found')
    res.status(200).json(specObject)
  } catch (error) {
    next(error)
  }
})

openApiRouter.use(serve)

openApiRouter.get('/', (req, res, next) => {
  try {
    const specObject = OpenAPI.getInstance()
    if (!specObject) throw new Error('OpenAPI spec not found')

    const handler = setup(specObject, {
      customCssUrl:
        'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.1/themes/3.x/theme-outline.min.css'
    })

    handler(req, res, next)
  } catch (error) {
    next(error)
  }
})

export { openApiRouter }
