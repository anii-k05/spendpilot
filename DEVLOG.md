## Day 1 — 2026-05-07

**Hours worked:** 7

**What I did:**  
Started the SpendPilot project setup using React + Vite and selected JavaScript as the variant since there is time constraint and I’m more confident working with JS than TypeScript. 

Configured Tailwind CSS and connected the project to GitHub for version control and to make the daily progress tracking easy. After the setup, I started with cleaning the default Vite starter files and created a proper project structure using separate folders.

I started building the landing page by creating reusable React components such as:
- Navbar
- Hero
- Stats
- Features

Then I connected these components inside `Home.jsx` using component composition. I also added gradients, hover effects, and cleaner card layouts to make the landing page look more modern and visually polished.

**What I learned:**  
Today I learned more about how React applications are structured using reusable components instead of keeping everything inside one file. I also understood how Vite improves frontend development speed and why component composition makes larger applications easier to manage. Another thing I noticed was how small spacing and overflow issues can heavily affect the overall UI quality.

**Blockers / what I'm stuck on:**  
I initially faced React file casing issues (`Navbar.jsx` vs `navbar.jsx`). But main thing where i was stuck was debugging the layout overflow and spacing issues while improving the landing page design. I fixed these issues after restructuring the components and updating Tailwind classes carefully. I improved alignment and responsiveness.

**Plan for tomorrow:**  
- Improve landing page polish further
- Add footer and better responsiveness
- Start building the Spend Input Form
- Research pricing data for AI tools
- Begin planning the audit engine structure
