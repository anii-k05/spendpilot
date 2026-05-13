import { describe, it, expect } from "vitest";

import {
  calculateSavings,
  generateRecommendation,
} from "../utils/auditEngine";

describe("calculateSavings", () => {

  it("should reduce spend by 40% for weekly usage", () => {

    const result = calculateSavings(1000, "Weekly", 5);

    expect(result.recommendedSpend).toBe(600);
    expect(result.savings).toBe(400);

  });

  it("should apply additional reduction for large teams with non-daily usage", () => {

    const result = calculateSavings(2000, "Weekly", 25);

    expect(result.recommendedSpend).toBe(960);
    expect(result.savings).toBe(1040);

  });

  it("should keep spend unchanged for daily usage", () => {

    const result = calculateSavings(1500, "Daily", 10);

    expect(result.recommendedSpend).toBe(1500);
    expect(result.savings).toBe(0);

  });

});

describe("generateRecommendation", () => {

  it("should recommend reviewing subscriptions for high spend and small teams", () => {

    const result = generateRecommendation(
      "ChatGPT",
      6000,
      "Daily",
      3
    );

    expect(result).toContain("significantly high");

  });

  it("should recommend enterprise pricing for large active teams", () => {

    const result = generateRecommendation(
      "Cursor",
      3000,
      "Daily",
      60
    );

    expect(result).toContain("enterprise pricing");

  });

});