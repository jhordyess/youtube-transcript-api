const PORT = process.env.NODE_PORT || 3000

const API_BASE_PATH = '/api/v1'

const DEV_HOST = `http://localhost:${PORT}${API_BASE_PATH}`

const PROD_HOST = process.env.API_HOST || DEV_HOST

export { PORT, API_BASE_PATH, DEV_HOST, PROD_HOST }
