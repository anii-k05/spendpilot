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

  let summary = "";

  // HIGH RISK SUMMARY

  if (highRiskTools.length > 0) {

    summary += `Your organization may be overspending on ${highRiskTools
      .map((tool) => tool.toolName)
      .join(", ")}. `;

    summary += `Optimizing tool usage and subscription allocation could significantly reduce operational AI costs. `;
  }

  // MEDIUM RISK SUMMARY

  if (mediumRiskTools.length > 0) {

    summary += `Some tools show moderate optimization opportunities based on current usage frequency and spending behavior. `;
  }

  // SAVINGS SUMMARY

  if (annualSavings > 0) {

    summary += `Estimated yearly savings currently stand at approximately $${annualSavings.toFixed(
      0
    )}. `;
  }

  // FINAL BUSINESS INSIGHT

  summary += `Overall, the current audit suggests that refining subscription management and monitoring team usage patterns can improve cost efficiency across the organization.`;

  return summary;
};

export default generateAISummary;