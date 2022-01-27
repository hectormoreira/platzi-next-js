import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()
  const quantity = allEntries.length

  response.statusCode = 200
  response.setHeader('content-type', 'application/json')

  response.end(JSON.stringify({ length: quantity, data: allEntries }))
}

export default allAvos