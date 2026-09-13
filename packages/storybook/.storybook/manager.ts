import { addons, types } from "storybook/manager-api"
import { ThemeTool } from "./theme-tool"

addons.register("darkie-coder/theme-toggle", () => {
  addons.add("darkie-coder/theme-toggle/tool", {
    type: types.TOOL,
    title: "Theme",
    match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
    render: ThemeTool,
  })
})
