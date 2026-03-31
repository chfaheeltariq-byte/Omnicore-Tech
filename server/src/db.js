import dotenv from 'dotenv'
import pg from 'pg'

dotenv.config({ path: '../.env' })
dotenv.config()

const { Pool } = pg

const connectionString = process.env.DATABASE_URL

const pool = connectionString
  ? new Pool({
      connectionString,
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
    })
  : null

export async function insertContactMessage({ name, email, company, service, message }) {
  if (!pool) {
    return { stored: false, fallback: true }
  }

  const result = await pool.query(
    `
      INSERT INTO contact_messages (name, email, company, service, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, created_at
    `,
    [name, email, company || null, service || null, message],
  )

  return {
    stored: true,
    record: result.rows[0],
  }
}

export async function getContactMessages() {
  if (!pool) {
    return []
  }

  const result = await pool.query(
    'SELECT id, name, email, company, service, message, created_at FROM contact_messages ORDER BY created_at DESC',
  )

  return result.rows
}
