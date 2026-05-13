# METRICS.md

# Overview

Since SpendPilot is currently positioned as an AI subscription audit and lead generation tool rather than a daily-use SaaS platform, i do not think traditional metrics like DAU (Daily Active Users) would be the correct way to measure success. Most users would probably use the tool occasionally whenever they want to review or optimize their AI spending instead of opening it every day.

Because of this, i think the most important metric at the current stage is whether users actually complete the audit flow and find enough value in the results to continue further.

---

# North Star Metric

## Completed Audit Reports Per Week

i think the strongest North Star metric for SpendPilot at the MVP stage is the number of completed audit reports generated per week.

My reasoning is that a completed audit means:
- the user selected tools
- entered spending information
- interacted with the dashboard
- reached the recommendation stage
- generated an AI summary

This metric directly measures whether users are receiving value from the product instead of only visiting the landing page and leaving.

---

# Input Metrics

## 1. Landing Page → Audit Start Conversion

This measures whether the landing page and CTA are convincing enough for users to begin the audit process.

---

## 2. Audit Completion Rate

This measures how many users actually finish entering their tool and pricing information instead of abandoning the flow midway.

---

## 3. Report Save Rate

This measures whether users find enough value in the generated audit to save the report after seeing the recommendations and AI summary.

---

# What I Would Instrument First

The first things i would track are:
- CTA button clicks
- tool selection events
- audit completion events
- report generation events
- report save events

i would also track which AI tools are selected most frequently because it could help identify where optimization demand is strongest.

---

# Pivot Decision Metric

i think a major pivot decision would be required if users consistently start audits but do not complete them.

For example:
- if audit completion rate drops below approximately 10%
- or if users generate reports but never save them

then it would probably indicate that:
- the product is not solving a strong enough problem
- the recommendations are not useful enough
- or the audit process feels too time-consuming

