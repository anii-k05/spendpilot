const generateAISummary = (auditResults) => {

  if (auditResults.length === 0) {
    return "No audit data available yet. Select AI tools and enter usage details to generate insights.";
  }

  const highRiskTools = auditResults.filter(
    (tool) => tool.riskLevel === "High"
  );

  const mediumRiskTools = auditResults.filter(
    (tool) => tool.riskLevel === "Medium"
  );

  const totalSavings = auditResults.reduce(
    (total, tool) => total + tool.savings,
    0
  );

  const annualSavings = totalSavings * 12;

  const optimizedTools = auditResults.filter(
    (tool) => tool.savings > 0
  );

  let summary = "";

  // EXECUTIVE OPENING

  summary += `SpendPilot analyzed your AI subscription ecosystem and identified multiple opportunities to improve cost efficiency, subscription allocation, and operational scalability. `;

  // HIGH RISK ANALYSIS

  if (highRiskTools.length > 0) {

    summary += `The audit detected elevated spending risk across ${highRiskTools
      .map((tool) => tool.toolName)
      .join(", ")} where subscription costs appear disproportionate to current usage patterns or team size. `;
  }

  // MEDIUM RISK ANALYSIS

  if (mediumRiskTools.length > 0) {

    summary += `Several tools also demonstrated moderate optimization potential due to inconsistent usage frequency and underutilized seat allocation. `;
  }

  // SAVINGS ANALYSIS

  if (annualSavings > 0) {

    summary += `Based on the current audit, the organization could potentially reduce AI operational expenses by approximately ₹${annualSavings.toLocaleString(
      "en-IN"
    )} annually through smarter plan selection and improved subscription management. `;
  }

  // OPTIMIZED TOOLS INSIGHT

  if (optimizedTools.length > 0) {

    summary += `The strongest optimization opportunities were identified in ${optimizedTools
      .map((tool) => tool.toolName)
      .join(", ")}, where revised pricing strategies may significantly improve overall cost-to-usage efficiency. `;
  }

  // FINAL BUSINESS INSIGHT

  summary += `Overall, the audit indicates that implementing structured AI governance, monitoring team adoption patterns, and aligning pricing tiers with actual business usage can substantially improve long-term financial efficiency without negatively impacting productivity or workflow continuity.`;

  return summary;
};

export default generateAISummary;