declare global {
  const DARKIE_CODER_VERSION: string
  const DARKIE_CODER_CHANNEL: string
}

export const InstallationVersion = typeof DARKIE_CODER_VERSION === "string" ? DARKIE_CODER_VERSION : "local"
export const InstallationChannel = typeof DARKIE_CODER_CHANNEL === "string" ? DARKIE_CODER_CHANNEL : "local"
export const InstallationLocal = InstallationChannel === "local"
