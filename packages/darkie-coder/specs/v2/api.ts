// @ts-nocheck

import { Darkie Coder } from "@opencode-ai/core"
import { ReadTool } from "@opencode-ai/core/tools"

const darkie-coder = Darkie Coder.make({})

darkie-coder.tool.add(ReadTool)

darkie-coder.tool.add({
  name: "bash",
  schema: {
    type: "object",
    properties: {
      command: {
        type: "string",
        description: "The command to run.",
      },
    },
    required: ["command"],
  },
  execute(input, ctx) {},
})

darkie-coder.auth.add({
  provider: "openai",
  type: "api",
  value: process.env.OPENAI_API_KEY,
})

darkie-coder.agent.add({
  name: "build",
  permissions: [],
  model: {
    id: "gpt-5-5",
    provider: "openai",
    variant: "xhigh",
  },
})

const sessionID = await darkie-coder.session.create({
  agent: "build",
})

darkie-coder.subscribe((event) => {
  console.log(event)
})

await darkie-coder.session.prompt({
  sessionID,
  text: "hey what is up",
})

await darkie-coder.session.prompt({
  sessionID,
  text: "what is up with this",
  files: [
    {
      mime: "image/png",
      uri: "data:image/png;base64,xxxx",
    },
  ],
})

await darkie-coder.session.wait()

console.log(await darkie-coder.session.messages(sessionID))
