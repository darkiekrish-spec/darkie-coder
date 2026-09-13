import type { ElectronAPI } from "../preload/types"

declare global {
  interface Window {
    api: ElectronAPI
    __DARKIE_CODER__?: {
      deepLinks?: string[]
    }
  }
}
