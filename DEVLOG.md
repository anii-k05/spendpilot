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


## Day 3 — 2026-05-09

**Hours worked:** 2

**What I did:**  
Today my only aim was to build the core audit logic system of SpendPilot which will act like the brain of the webapp. Firstly i created a separate utility file namely auditEngine.js and in that file i tried to keep the calculation logic simple and easy to code but yet modular and i tried to maintain it rather than placing everything directly inside the UI components. Then i implemented a savings calculation logic. So now it will analyze the user input from the fields of monthly spend, number of seats, and frequency of usage and then it will generate an estimate for optimized spending and recommend if any savings can be made based on the other plans. Continuing with the logic section i added a recommendation generation logic for different scenarios which recommends other low costing plans, any overspending warning if spending is high or also suggest enterprise pricing consideration if the people using the Tool are more and vice versa. Lastly i completed today's work with connecting the audit engine with frontend so it displays current spend, recommend spend, estimated savings and generated recommendations based on the input. I even tested the logic with various different inputs to verify is the recommendations being generated are legit or not

**What I learned:**  
Today I learned how keeping the logic separate from the UI makes and keeps our app clean and easier to work on. I only focused on the logic of the app today rather than enhancing the UI or polishing it i only created a basic UI  in simple words i only added the features and functionalities that are required to make the app run. 

**Blockers / what I'm stuck on:**  
As such there weren't any major blockers faced today only during the implementation of coding part i felt like i was stuck on what conditional statements i should use so that i can keep to code as simple as possible to understand. 

**Plan for tomorrow:**  
- Improve audit summary UI polish and responsiveness
- Fix remaining overflow and spacing issues
- Start building total savings overview section
- Add better formatting for financial outputs
- Begin improving recommendation accuracy using pricing references from the original websites.


## Day 4 — 2026-05-10

**Hours worked:** 1

**What I did:**  
Today i did a very minimal work due to other commitments, what i worked on is improving the dashboard for my webapp by adding an audit result section which i feel is actually better than just keeping a basic output section. I then added analytics card which will display total monthly spend, optimized spend, estimated savings, and annual savings based on the user input. And then to further enhance the user experience i implemented a monthly vs annual comparison which compares the current yearly spending and optimized yearly spending and based on that it will also give us potential yearly savings. Along with that i added a risk indicators inside the summary cards which will show low risk, medium risk, or high risk based on the calculations.  

**What I learned:**  
As i worked on a very few things today i did not have much knowledge to gain but i did understand one thing that the more we make it easier for the user to understand the better our app gets like small visualization or the better presentation we make it improves the overall user experience  

**Blockers / what I'm stuck on:**  
There are still some UI polishing and responsiveness issues remaining in the dashboard section, especially regarding spacing consistency and overflow behavior on different screen sizes. The logic and calculations are working correctly but the visual refinement still needs improvement.

**Plan for tomorrow:**  
- Improve dashboard responsiveness and spacing consistency
- Add better gradients and hover animations
- Improve financial number formatting
- Polish audit summary card UI
- Start planning charts and graphical visualization section


## Day 5 — 2026-05-11

**Hours worked:** 6

**What I did:**  
Today i started with integrating  AI summary system into the dashboard which will generate a business specific summary based on the audit results and to support future AI integrations, i created a separate `PROMPTS.md` file where I documented the prompt i used along with the structure, reason for using the specific prompt, previous failed prompts and where i lacked and what issues i faced along with some future improvements for LLM integration. After that i started with the backend today using supabase. i used supabase to avoid complex backend structure because as there is time constraint as well as it will be easy for me to implement and explain my app as it keeps the architecture cleaner and easy to maintain. I created a cloud database table for storing the reports and then connected frontend with supabase so now the reports generated will be saved in the database. Initially the audit reports were being auto saved on every state update for example every change i was making it was getting reflected in the database sot to solve it i implemented a simple button and removed the auto saving logic so now the reports will only be stored in the database after clicking the generate button and i ended today's work by checking different audit scenarios and ensured that the data was successfully being stored in supabase 

**What I learned:**  
Today I learned how to separate the database from the UI and how it helps us to keep the code easy to maintain another important thing i feel that i learned is that automatically triggering database operations on every render creates unnecessary duplicate entries making it very complex to handle the database so implementing proper controlled save actions is really helpful and is a good concept that should be implemented in real world applications.

**Blockers / what I'm stuck on:**  
During i was implementing the AI summary logic it took me a bit of time to make the system generate a concise and business oriented yet easy to understand summary so yes i was stuck on the summary section trying to make it as simple to understand as possible and i spent some time in understanding supabase dashboard because initially i faced 404 errors then upon checking the browser console i rectified that the API URL was wrongly configured so i fixed it then. 

**Plan for tomorrow:**  
- Fetch and display saved audit reports from supabase  
- Improve saved reports dashboard UI  
- Fix minor bugs and make the app more smooth  
- Complete the backend work and deploy the app on vercel  
- Try to complete majority of the work so only final checks and UI improvements are left for the final day


## Day 6 — 2026-05-12

**Hours worked:** 7

**What I did:**  
Today i mainly focused on improving the UI consistency and overall dashboard experience of SpendPilot. Most of the work today was related to fixing spacing, alignment, responsiveness, and section hierarchy issues across different dashboard sections because many of the cards and sections were looking visually congested due to independent component rendering. Apart from UI work, i also improved alignment consistency of headings, cards, summary sections, and form layouts. I tested multiple layouts and spacing combinations to make the dashboard feel less cramped while still maintaining responsiveness across screen sizes.

**What I learned:** 
Today I learned that UI polish takes significantly more time than implementing the actual functionality because even small spacing inconsistencies can affect the complete visual experience of the application. I also understood how independent reusable components can sometimes create unexpected alignment and spacing issues when combined together in larger layouts. Another thing i noticed is that proper section hierarchy improves user flow and reduces unnecessary friction while interacting with forms and buttons.

**Blockers / what I'm stuck on:** 
The major blocker today was debugging spacing consistency between independent dashboard sections because some components were behaving differently depending on whether data existed or not. I spent a lot of time testing different margin, padding, height, and layout combinations to maintain visual consistency across empty and populated states.

**Plan for tomorrow:**  
- Complete all remaining documentation files required for submission
- Deploy the application and verify all links and features are working correctly 
- Clean up unused code and improve overall project structure  
- Complete the backend work and deploy the app on vercel  
- Organize Git commits and complete final GitHub push
- Prepare screenshots, screen recording, and final submission materials
- Make the project fully submission-ready


## Day 7 – Final Productization & Documentation

Today I completed the final production-level polish for SpendPilot. I replaced manual spend inputs with real-world AI subscription plans using verified pricing references and converted pricing support fully to INR (₹). I also integrated Google Gemini API to generate AI-powered executive summaries dynamically based on audit data while implementing a fallback summary generator for reliability during API failures.

On the frontend side, I improved the dashboard UX, connected the hero buttons to functional actions, added screenshots and demo support, and finalized responsive UI cleanup. I also completed the remaining entrepreneurial and technical documentation including GTM, ECONOMICS, USER_INTERVIEWS, PROMPTS, TESTS, METRICS, and README sections.

Finally, I deployed the latest production build to Vercel and verified end-to-end functionality including audit generation, AI summary rendering, Supabase storage, and report persistence.