import { registerCustomTheme } from "@pierre/diffs"
import { Darkie CoderTheme } from "./marked-theme"

let registered = false

export function registerDarkie CoderTheme() {
  if (registered) return
  registered = true
  registerCustomTheme("Darkie Coder", () => Promise.resolve(Darkie CoderTheme))
}
