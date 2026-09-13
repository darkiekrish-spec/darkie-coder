import { $ } from "bun"
import { downloadCliToResources } from "./utils"

await $`bun run install-electron`

await $`bun ./scripts/copy-icons.ts ${process.env.DARKIE_CODER_CHANNEL ?? "dev"}`

await $`cd ../darkie-coder && bun script/build-node.ts`
await downloadCliToResources()
