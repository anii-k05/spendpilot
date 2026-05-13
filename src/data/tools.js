import chatgptLogo from "../assets/logos/chatgpt.png";
import claudeLogo from "../assets/logos/claude.png";
import geminiLogo from "../assets/logos/gemini.png";
import cursorLogo from "../assets/logos/cursor.png";
import copilotLogo from "../assets/logos/copilot.png";
import windsurfLogo from "../assets/logos/windsurf.jpeg";

const tools = [
  {
    id: 1,
    name: "ChatGPT",
    description: "AI assistant for writing, coding, and research",
    logo: chatgptLogo,

    plans: [
      { name: "Free", price: 0 },
      { name: "Go", price: 399 },
      { name: "Plus", price: 1999 },
      { name: "Pro", price: 10699 },
    ],
  },

  {
    id: 2,
    name: "Claude",
    description: "Anthropic AI for long-form reasoning and analysis",
    logo: claudeLogo,

    plans: [
      { name: "Free", price: 0 },
      { name: "Pro", price: 1900 },
      { name: "Max", price: 9500 },
      { name: "Team Standard", price: 2375 },
      { name: "Team Premium", price: 11875 },
    ],
  },

  {
    id: 3,
    name: "Gemini",
    description: "Google AI for productivity and multimodal tasks",
    logo: geminiLogo,

    plans: [
      { name: "Google AI Plus", price: 399 },
      { name: "Google AI Pro", price: 1950 },
      { name: "Google AI Ultra", price: 24500 },
    ],
  },

  {
    id: 4,
    name: "Cursor",
    description: "AI-powered coding editor for developers",
    logo: cursorLogo,

    plans: [
      { name: "Individual Pro", price: 1900 },
      { name: "Individual Pro+", price: 5700 },
      { name: "Individual Ultra", price: 19000 },
      { name: "Teams", price: 3800 },
    ],
  },

  {
    id: 5,
    name: "GitHub Copilot",
    description: "AI coding assistant integrated with IDEs",
    logo: copilotLogo,

    plans: [
      { name: "Pro", price: 950 },
      { name: "Pro+", price: 3705 },
      { name: "Business", price: 1805 },
      { name: "Enterprise", price: 3705 },
    ],
  },

  {
    id: 6,
    name: "Windsurf",
    description: "AI-native development environment",
    logo: windsurfLogo,

    plans: [
      { name: "Free", price: 0 },
      { name: "Pro Popular", price: 1900 },
      { name: "Max", price: 19000 },
      { name: "Teams", price: 3800 },
    ],
  },
];

export default tools;