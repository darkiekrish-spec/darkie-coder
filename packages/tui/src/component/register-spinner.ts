import { getComponentCatalogue } from "@opentui/solid/components"
import { registerSpinner } from "opentui-spinner/solid"

export function registerDarkie CoderSpinner() {
  if (!getComponentCatalogue().spinner) registerSpinner()
}
