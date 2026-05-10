export type AILogo = {
  id: string;
  name: string;
  /** Background color when rendered as a chip */
  bg: string;
  /** Foreground (text/glyph) color */
  fg: string;
  /** Single character glyph used as the icon */
  glyph: string;
};

export const aiLogos: Record<string, AILogo> = {
  chatgpt:   { id: "chatgpt",   name: "ChatGPT",    bg: "#10A37F", fg: "#ffffff", glyph: "✺" },
  claude:    { id: "claude",    name: "Claude",     bg: "#D97757", fg: "#ffffff", glyph: "✦" },
  gemini:    { id: "gemini",    name: "Gemini",     bg: "#1F6FEB", fg: "#ffffff", glyph: "✧" },
  midjourney:{ id: "midjourney",name: "Midjourney", bg: "#0B0B0B", fg: "#ffffff", glyph: "◈" },
  sora:      { id: "sora",      name: "Sora",       bg: "#000000", fg: "#ffffff", glyph: "◉" },
  runway:    { id: "runway",    name: "Runway",     bg: "#000000", fg: "#ffffff", glyph: "▶" },
  heygen:    { id: "heygen",    name: "HeyGen",     bg: "#7C5CFF", fg: "#ffffff", glyph: "❍" },
  suno:      { id: "suno",      name: "Suno",       bg: "#111111", fg: "#FF6A4D", glyph: "♫" },
  eleven:    { id: "eleven",    name: "ElevenLabs", bg: "#0E0E0E", fg: "#ffffff", glyph: "▓" },
  lovable:   { id: "lovable",   name: "Lovable",    bg: "#FF4D6D", fg: "#ffffff", glyph: "♥" },
  cursor:    { id: "cursor",    name: "Cursor",     bg: "#0A0A0A", fg: "#ffffff", glyph: "▎" },
  claudecode:{ id: "claudecode",name: "Claude Code",bg: "#1E1B16", fg: "#D97757", glyph: "</>" },
  codex:     { id: "codex",     name: "Codex",      bg: "#0D0D0D", fg: "#7CFFA0", glyph: "{ }" },
  fusion:    { id: "fusion",    name: "Fusion AI",  bg: "linear-gradient(135deg,#5B2BFF,#A855F7)", fg: "#ffffff", glyph: "F" },
  veo:       { id: "veo",       name: "Veo",        bg: "#1F6FEB", fg: "#ffffff", glyph: "▷" },
  perplexity:{ id: "perplexity",name: "Perplexity", bg: "#1FB8CD", fg: "#0B0B0B", glyph: "⌘" },
};