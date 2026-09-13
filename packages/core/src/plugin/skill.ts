/// <reference path="../markdown.d.ts" />

export * as SkillPlugin from "./skill"

import { define } from "./internal"
import { Effect } from "effect"
import { AbsolutePath } from "../schema"
import { SkillV2 } from "../skill"
import customizeDarkie CoderContent from "./skill/customize-darkie-coder.md" with { type: "text" }

export const CustomizeDarkie CoderContent = customizeDarkie CoderContent

export const Plugin = define({
  id: "skill",
  effect: Effect.fn(function* (ctx) {
    yield* ctx.skill.transform((draft) => {
      draft.source(
        SkillV2.EmbeddedSource.make({
          type: "embedded",
          skill: SkillV2.Info.make({
            name: "customize-darkie-coder",
            description:
              "Use ONLY when the user is editing or creating darkie-coder's own configuration: darkie-coder.json, darkie-coder.jsonc, files under .darkie-coder/, or files under ~/.config/darkie-coder/. Also use when creating or fixing darkie-coder agents, subagents, commands, skills, plugins, MCP servers, or permission rules. Do not use for the user's own application code, or for any project that is not configuring darkie-coder itself.",
            location: AbsolutePath.make("/builtin/customize-darkie-coder.md"),
            content: CustomizeDarkie CoderContent,
          }),
        }),
      )
    })
  }),
})
