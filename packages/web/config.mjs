const stage = process.env.SST_STAGE || "dev"

export default {
  url: stage === "production" ? "https://darkie-coder.ai" : `https://${stage}.darkie-coder.ai`,
  console: stage === "production" ? "https://darkie-coder.ai/auth" : `https://${stage}.darkie-coder.ai/auth`,
  email: "help@anoma.ly",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/anomalyco/darkie-coder",
  discord: "https://darkie-coder.ai/discord",
  headerLinks: [
    { name: "app.header.home", url: "/" },
    { name: "app.header.docs", url: "/docs/" },
  ],
}
