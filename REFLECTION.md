# 1. The hardest bug you hit this week, and how you debugged it

The hardest bug on which i worked on was while integrating the Gemini API for generating the AI Executive Summary as before that i only had a fallback summary generator which used frontend logic to generate the summaries but after integrating Gemini the summary is generated based on the audit results now while implementing this i faced issues as changing the file name and shifting the whole summary generation logic to a different file my entire application suddenly started showing a blank white screen that too after being deployed then after checking the browser console, I found out the error which was related to await that i used outside the async function and another issue was that aiSummary was not defined inside the component rendering section. At first I thought the issue was with the Gemini API request itself so I spent some time checking the API keys. But later on i found out that i used await generateAISummary() function directly inside the component body. So to solve that i moved generateAISummary() function in handleGenerateReport function and the initial summary that was being generated via frontend i made it a fallback summary generator to handle the API failure gracefully


---

# 2. A decision you reversed mid-week, and what made you reverse it

One major decision I reversed was that the app previously when i built it the input fields were enter monthly spend, no of seats and usage and i thought i will keep it same throughout and focus on other required functionalities given in the assignment but then upon further development and after completing the whole front end i realised that due to that input fields the dashboard was not feeling realistic enough so rather than using random manual input i added real AI subscription plans in a dropdown where the pricing and plans references were collected from the official websites of each and every tool mentioned in the app and i also converted the pricing from USD to INR everywhere to maintain consistency throughout the app. This decision of mine did increase the amount of work for me but on the other hand it enhanced the overall feel of the app and made it look more realistic


---

# 3. What you would build in week 2 if you had it

If I had another week I would focus on improving the logic of the app and only giving minimal attention to polishing the UI. One feature which i would have surely added would have been a proper analytics dashboard with a few graphs so users can easily compare how their AI spending changes over time and making the app more enhanced and visually impactful. Another thing i would have improved the audit engine logic also i would surely like to add a in depth analysis for team behaviour, adding plan comparisons and maybe more validation to enhance input security. Also i was not able to add various features like email delivery, captcha, abuse protection, graphs so i would add all the missing features as well. Overall if i had another week i would majorly focus enhancing the long term usability of the app and add more features after completing the MVPs 

---

# 4. How you used AI tools

During the development i used AI mainly for guidance and as an assistance for development rather than generating the whole project with the help of AI I used Chatgpt heavily for guidance of architecture, documentation, debugging UI issues that i faced for example wherever i had to enhance any feature of the UI i asked GPT to help me improve it and then i tried different combinations, padding values, alignment styles, colors and checked which suited the UI of my app. Then I took help of AI in understanding the assignment overall as a brief to ensure i did not miss any point while going through it and even for GitHub and documentation pushing I used ChatGPT. Then talking about the logic part i used it to improve the wording and structure of business-oriented summaries generated inside the application. However i was mindful with what i was trusting ChatGPT with i did not blindly generate financial logic or implemented any calculation for audit result rather first i took suggestions that which conditional statements will make the code easy to maintain and change further incase i have to make changes. I did not trust AI with UI changes at all because i did not wanted to mess my UI up so i just asked it to give me different combinations of various properties which i tried myself in the code although it took me time to finalize the properties of the UI cards. And while integrating Gemini for AI Executive Summary it gave me wrong code due to which i faced issues implementing it and even the app broke sometimes due to incorrect code and displayed a white screen but then upon further fixing and proper implementation understanding it got fixed. So overall i did trust ChatGPT for productivity, guidance and in debugging but any implementation or verification were done manually 

---

# 5. Self-rating

## Discipline — 8/10
I worked on the project throughout the week even for less hours but i maintained consistency everyday.

## Code Quality — 7.5/10
The project structure overall is good but i feel as i have used react there are areas where code reusability could have been implemented in a better manner.

## Design Sense — 8/10
I focused on keeping the UI clean and responsive but i faced spacing issues between the sections

## Problem Solving — 8.5/10
I handled multiple integration issues like Gemini API failures, UI rendering under time constraints.

## Entrepreneurial Thinking — 7.5/10
I tried to understand user POV and build a app that focuses on real AI spending problems, but i feel if i had more exposure to startups or in industry it would have been better
