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