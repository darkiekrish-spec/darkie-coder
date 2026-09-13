import { afterEach, describe, expect, test } from "bun:test"
import { Option, Redacted } from "effect"
import { Flag } from "@opencode-ai/core/flag/flag"
import { ServerAuth } from "../../src/server/auth"

const original = {
  DARKIE_CODER_SERVER_PASSWORD: Flag.DARKIE_CODER_SERVER_PASSWORD,
  DARKIE_CODER_SERVER_USERNAME: Flag.DARKIE_CODER_SERVER_USERNAME,
}

afterEach(() => {
  Flag.DARKIE_CODER_SERVER_PASSWORD = original.DARKIE_CODER_SERVER_PASSWORD
  Flag.DARKIE_CODER_SERVER_USERNAME = original.DARKIE_CODER_SERVER_USERNAME
})

describe("ServerAuth", () => {
  test("does not emit auth headers without a password", () => {
    Flag.DARKIE_CODER_SERVER_PASSWORD = undefined
    Flag.DARKIE_CODER_SERVER_USERNAME = "alice"

    expect(ServerAuth.header()).toBeUndefined()
    expect(ServerAuth.headers()).toBeUndefined()
  })

  test("defaults to the darkie-coder username", () => {
    Flag.DARKIE_CODER_SERVER_PASSWORD = "secret"
    Flag.DARKIE_CODER_SERVER_USERNAME = undefined

    expect(ServerAuth.headers()).toEqual({
      Authorization: `Basic ${Buffer.from("darkie-coder:secret").toString("base64")}`,
    })
  })

  test("uses the configured username", () => {
    Flag.DARKIE_CODER_SERVER_PASSWORD = "secret"
    Flag.DARKIE_CODER_SERVER_USERNAME = "alice"

    expect(ServerAuth.headers()).toEqual({
      Authorization: `Basic ${Buffer.from("alice:secret").toString("base64")}`,
    })
  })

  test("prefers explicit credentials", () => {
    Flag.DARKIE_CODER_SERVER_PASSWORD = "secret"
    Flag.DARKIE_CODER_SERVER_USERNAME = "alice"

    expect(ServerAuth.headers({ password: "cli-secret", username: "bob" })).toEqual({
      Authorization: `Basic ${Buffer.from("bob:cli-secret").toString("base64")}`,
    })
  })

  test("validates decoded credentials against effect config", () => {
    const config = { password: Option.some("secret"), username: "alice" }

    expect(ServerAuth.required(config)).toBe(true)
    expect(ServerAuth.authorized({ username: "alice", password: Redacted.make("secret") }, config)).toBe(true)
    expect(ServerAuth.authorized({ username: "darkie-coder", password: Redacted.make("secret") }, config)).toBe(false)
  })
})
