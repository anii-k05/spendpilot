# TESTS.md

# Overview

I have included automated unit testing which are focused on the audit engine logic because it is the core calculation system of SpendPilot. The tests were implemented using Vitest to verify that the savings calculations and recommendation logic behave correctly for different user inputs and audit scenarios. The main goal of these tests were to ensure that the optimization logic remains predictable and consistent whenever changes are made to the pricing logic or recommendation conditions.

---

# Test File

```plaintext
src/tests/auditEngine.test.js
```

--- 

# Tests Implemented
1. Weekly Usage Savings Reduction
This test checks if the audit engine reduces the monthly spend by 40% when the usage is selected as weekly.
Covers:
- calculateSavings()
- weekly usage optimization logic

2. Large Team Optimization Logic
This test checks if additional savings are applied when the team size selected as large and the tool usage is not daily.
Covers:
- calculateSavings()
- large team condition handling

3. Daily Usage No Reduction
This test verifies that no unnecessary savings are generated when the user has daily usage and the user inpurt already appears optimized.
Covers:
- calculateSavings()
- optimized usage behavior
4. High Spend Recommendation
This test checks if the system generates overspending warnings when the monthly spend is significantly high compared to the team size.
Covers:
- generateRecommendation()
- overspending detection logic
5. Enterprise Recommendation
This test checks whether the system recommends enterprise pricing for large teams with heavy daily usage.
Covers:
- generateRecommendation()
- enterprise scaling recommendation logic

---

# How To Run Tests

Install dependencies:
```
npm install
```

Run tests:
```
npm test
```

---

# Test Result

All 5 tests are currently passing successfully using Vitest.