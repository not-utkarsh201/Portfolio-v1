// Time intervals
export const CLOCK_UPDATE_INTERVAL = 1000; // 1 second in milliseconds

export const SOCIAL_LINKS = {
  github: import.meta.env.VITE_GITHUB_URL,
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
  twitter: import.meta.env.VITE_TWITTER_URL,
} as const;

export const SITE_URL =
  import.meta.env.VITE_SITE_URL || "http://localhost:5173";

// Location
export const LOCATION = "Chennai, India";
