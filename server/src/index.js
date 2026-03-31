import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { getContactMessages, insertContactMessage } from './db.js'

dotenv.config({ path: '../.env' })
dotenv.config()

const app = express()
const port = Number(process.env.PORT || 4000)

app.use(
  cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : '*',
  }),
)
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'omnicore-tech-api' })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, company, service, message } = req.body ?? {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required' })
  }

  try {
    const result = await insertContactMessage({ name, email, company, service, message })
    return res.status(201).json({ success: true, ...result })
  } catch (error) {
    return res.status(500).json({
      error: 'Failed to store contact message',
      details: error instanceof Error ? error.message : 'Unknown error',
    })
  }
})

app.get('/api/admin/messages', async (_req, res) => {
  try {
    const messages = await getContactMessages()
    return res.json({ success: true, messages })
  } catch (error) {
    return res.status(500).json({
      error: 'Failed to load messages',
      details: error instanceof Error ? error.message : 'Unknown error',
    })
  }
})

app.listen(port, () => {
  console.log(`Omnicore Tech API listening on http://localhost:${port}`)
})
