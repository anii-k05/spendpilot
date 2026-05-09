const calculateSavings = (monthlySpend, usage, seats) => {

  let recommendedSpend = monthlySpend;

  if (usage === "Weekly" || usage === "Rarely") {
    recommendedSpend = monthlySpend * 0.6;
  }

  if (seats > 20 && usage !== "Daily") {
    recommendedSpend = recommendedSpend * 0.8;
  }

  const savings = monthlySpend - recommendedSpend;

  return {
    recommendedSpend,
    savings,
  };
};

const generateRecommendation = (
  toolName,
  monthlySpend,
  usage,
  seats
) => {

  if (monthlySpend > 5000 && seats < 5) {
    return `Your ${toolName} spending is significantly high compared to the team size. Review unused subscriptions and premium plans.`;
  }

  if (seats > 50 && usage === "Daily") {
    return `Your team heavily relies on ${toolName}. Consider enterprise pricing for better scalability and cost efficiency.`;
  }

  if (usage === "Occasionally") {
    return `Your team appears to use ${toolName} infrequently. Consider downgrading to a lower-cost plan.`;
  }

  if (usage === "Weekly") {
    return `Your ${toolName} usage is moderate. A smaller subscription plan may reduce costs.`;
  }

  return `${toolName} spending appears optimized for your current needs.`;
};

export {
  calculateSavings,
  generateRecommendation,
};