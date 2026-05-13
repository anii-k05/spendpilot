import fallbackSummaryGenerator from "./fallbackSummaryGenerator";

const generateAISummary = async (auditResults) => {

  if (auditResults.length === 0) {
    return "No audit data available yet.";
  }

  try {

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    const totalSavings = auditResults.reduce(
      (total, tool) => total + tool.savings,
      0
    );
    const annualSavings = totalSavings * 12;

    const summaryPrompt = `
        Role:
        You are an AI financial audit assistant for a SaaS platform called SpendPilot.

        Task:
        Generate a concise executive summary based on the AI tool audit results provided below.

        Writing Instructions:
        - Write approximately 70 to 90 words
        - Use a professional but conversational business tone
        - Keep the language simple and easy for non-technical stakeholders
        - Personalize the summary based on the audit data
        - Highlight overspending, underutilization, or optimization opportunities where relevant
        - Mention the estimated annual savings naturally within the paragraph
        - Explain which area or tools show the strongest optimization potential
        - Prioritize the most impactful findings instead of listing every tool
        - Maintain a confident and advisory tone without sounding overly corporate or sales-focused

        Constraints:
        - Do not use bullet points
        - Do not include headings
        - Do not repeat the same recommendation wording
        - Avoid generic phrases and filler language
        - Avoid exaggerated claims or dramatic language
        - Return only a single paragraph

        Audit Data:
        ${auditResults.map((tool) => `
        Tool: ${tool.toolName}
        Monthly Spend: ₹${tool.monthlySpend}
        Recommended Spend: ₹${tool.recommendedSpend}
        Potential Savings: ₹${tool.savings}
        Risk Level: ${tool.riskLevel}
        Recommendation: ${tool.recommendation}
        `).join("\n")}

        Estimated Annual Savings: ₹${annualSavings}
        `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: summaryPrompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const generatedText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      throw new Error("AI summary generation failed");
    }

    return generatedText;

  } catch (error) {

    console.error("Gemini API Error:", error);

    return fallbackSummaryGenerator(auditResults);

  }
};

export default generateAISummary;