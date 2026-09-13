interface ImportMetaEnv {
  readonly DARKIE_CODER_CHANNEL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module "virtual:darkie-coder-server" {
  export namespace Server {
    export const listen: typeof import("../../../darkie-coder/dist/types/src/node").Server.listen
    export type Listener = import("../../../darkie-coder/dist/types/src/node").Server.Listener
  }
  export namespace Config {
    export const get: typeof import("../../../darkie-coder/dist/types/src/node").Config.get
    export type Info = import("../../../darkie-coder/dist/types/src/node").Config.Info
  }
  export const bootstrap: typeof import("../../../darkie-coder/dist/types/src/node").bootstrap
}
