export * from "./client.js"
export * from "./server.js"

import { createDarkie CoderClient } from "./client.js"
import { createDarkie CoderServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export * as data from "./data.js"

export async function createDarkie Coder(options?: ServerOptions) {
  const server = await createDarkie CoderServer({
    ...options,
  })

  const client = createDarkie CoderClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
