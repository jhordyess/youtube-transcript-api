import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

const port = process.env.NODE_PORT || 3000

export { port }
