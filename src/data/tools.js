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
  },
  {
    id: 2,
    name: "Claude",
    description: "Anthropic AI for long-form reasoning and analysis",
    logo: claudeLogo,
  },
  {
    id: 3,
    name: "Gemini",
    description: "Google AI for productivity and multimodal tasks",
    logo: geminiLogo,
  },
  {
    id: 4,
    name: "Cursor",
    description: "AI-powered coding editor for developers",
    logo: cursorLogo,
  },
  {
    id: 5,
    name: "GitHub Copilot",
    description: "AI coding assistant integrated with IDEs",
    logo: copilotLogo,
  },
  {
    id: 6,
    name: "Windsurf",
    description: "AI-native development environment",
    logo: windsurfLogo,
  },
];

export default tools;