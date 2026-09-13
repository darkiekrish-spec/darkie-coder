/**
 * Application-wide constants and configuration
 */
export const config = {
  // Base URL
  baseUrl: "https://darkie-coder.ai",

  // GitHub
  github: {
    repoUrl: "https://github.com/anomalyco/darkie-coder",
    starsFormatted: {
      compact: "195K",
      full: "195,000",
    },
  },

  // Social links
  social: {
    twitter: "https://x.com/darkie-coder",
    discord: "https://discord.gg/darkie-coder",
  },

  // Static stats (used on landing page)
  stats: {
    contributors: "950",
    commits: "13,000",
    monthlyUsers: "16M",
  },
} as const
