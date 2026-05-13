## Overview
SpendPilot uses AI generated summaries to help the users understand about their spending on their AI . For now, the application uses simulated frontend based summary generation logic as a starting phase of the app ensuring that the summaries section is working efficiently. However, the following prompts will document how the LLM APIs(either OpenAI or Anthropic) will support the future integration. The main goal of these prompts is to generate a short and professional summaries that are also business oriented which will help founders and engineering teams to understand their overspending and how they can optimize it further.


## AI Executive Summary Prompt
You have to think like you are an AI financial optimization assistant and analyze the given AI software spending audit data to generate a concise executive summary for a startup or engineering team depending on the data. You have to make sure that the summary identifies the overspending from the data and mention the optimization opportunities along with focusing on highlighting the annual savings while maintaining a professional Software as a Service tone so you have to avoid sounding robotic or overly technical as the output summary might be reviewed by someone who isnt a technical person ensure that the word limit is under 100 words keeping the summary concise but impactful and clear to understand 

Below i am mentioning the audit Data:
tool Name: {{toolName}}, current Spend: {{monthlySpend}}, recommended spend: {{recommendedSpend}}, estimated savings: {{savings}}, risk level: {{riskLevel}}

Generate a concise executive summary for the audit results.

## Why This Prompt Was Designed This Way
i tried to keep the prompt in such a manner that it generates a concise and readable summaries which also keeps it a bit of business focused rather than only texhnical as the target users of SpendPilot are startup founders , engineering managers, and small teams who may not want deep technical explanations and my thinking was if someone wanted to understand or know about their spending on AI they would like it if its a little short but to the point. Because of this the summaries prioritize clarity on the user's financial insights and gives recommendations based on the user input. I also made sure that there are constraints as well like maintaining a human friendly yet professional tone and limit the length of the response generated so that the generated output can easily fix within the cards i used in a UI as i already spend a lot of time polishing the UI cards as the content of each card kept going out of the card when being hovered on or expanded.

## Failed Prompt Iterations / Learnings
Initially I gave basic and short prompts due to which the summaries being generated were too generic and upon trying different testing data it also gave repetitive summary. As i mentioned in the above section that i tried to keep the summary concise because initially the detailed summaries disturbed the balance of the UI and it looked very messy and congested also i tired to give prompts with different financial terms also but then the issue was it felt that the summary was overly long and unnatural and long summaries felt unreadable in the UI cards. After trying different prompts i proceeded with a simple and controlled prompt and its main focus is to maintain readability and give concise business recommendations.

## Future Improvements
In future, I will integrate a real LLM API(either Anthropic or OpenAI) to generate dynamic summaries based on the live audit data. Additionally i will try to improve the tone further for technical and well as non-technical users, give personalized recommendations based on the organization/startups team workflow and give company specific optimization insights
