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


## Day 2 — 2026-05-08

**Hours worked:** 4

**What I did:**  
Today I designed an interactive AI tool selection system for spendpilot and i used react state management for it. I added selectable tool cards for each AI tool and further made it expandable as well as i included logos for all AI tool like ChatGPT, Claude, Gemini, Cursor, GitHub Copilot and Windsurf. In the expandable property I added user input features like monthly spending, seat count and frequency of use for each tool selected. After that i implemented localStorage saving so that the user data remains saved even after the browser gets accidently refreshed or closed. Followed by it today i again worked on improving the UI by refining spacing, alignment, hover effects, responsive layout, and card styling to make the application look more polished and modern. I added basic validation to teh form as well to prevent users from entering invalid values 

**What I learned:** 
I learned more about managing dynamic state in React and handling conditional rendering inside reusable components. I also improved my understanding of localStorage persistance and how not to complexify the code by added unwanted features for validation and how to keep the code clean by using native HTML input attributes with React and still achieving the required amount of validtion for a form. Also i got to know how small layout changes can affect the look of the UI and affect the responsivenes 

**Blockers / what I'm stuck on:**  
I am still facing minor responsive UI issues where the texts and the inputs inside the cards slightly overflows from the card, the functionality is working correctly but there are minor UI issues which needs further polishing.

**Plan for tomorrow:**  
- Improve responsive UI behavior and fix overflow issues
- Start building the audit summary section
- Begin implementing cost calculation logic
- Start planning recommendation rules for the audit engine