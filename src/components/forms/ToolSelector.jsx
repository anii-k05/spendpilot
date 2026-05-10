import { useEffect, useState } from "react";
import tools from "../../data/tools";
import ToolCard from "./ToolCard";
import {
  calculateSavings,
  generateRecommendation,
} from "../../utils/auditEngine";

const ToolSelector = () => {

  const [selectedTools, setSelectedTools] = useState([]);

  const [toolInputs, setToolInputs] = useState(() => {

    const savedData = localStorage.getItem("spendpilot-tool-data");

    return savedData ? JSON.parse(savedData) : {};

  });


  const handleToolSelect = (toolName) => {

    if (selectedTools.includes(toolName)) {

      setSelectedTools(
        selectedTools.filter((tool) => tool !== toolName)
      );

    } else {

      setSelectedTools([...selectedTools, toolName]);

    }
  };

  const handleInputChange = (toolName, field, value) => {

    setToolInputs((prev) => ({
      ...prev,

      [toolName]: {
        ...prev[toolName],
        [field]: value,
      },

    }));
  };


  useEffect(() => {

    localStorage.setItem(
      "spendpilot-tool-data",
      JSON.stringify(toolInputs)
    );

  }, [toolInputs]);

  const auditResults = selectedTools.map((toolName) => {

    const toolData = toolInputs[toolName];

    if (!toolData) return null;

    const monthlySpend = Number(toolData.monthlySpend || 0);
    const seats = Number(toolData.seats || 0);
    const usage = toolData.usage;

    const { recommendedSpend, savings } =
      calculateSavings(monthlySpend, usage, seats);

    const recommendation = generateRecommendation(
      toolName,
      monthlySpend,
      usage,
      seats
    );

    let riskLevel = "Low";

    if (savings >= 500) {
      riskLevel = "High";
    } else if (savings >= 100) {
      riskLevel = "Medium";
    }

    return {
      toolName,
      monthlySpend,
      recommendedSpend,
      savings,
      recommendation,
      riskLevel,
    };

  }).filter(Boolean);

  const totalCurrentSpend = auditResults.reduce(
    (total, tool) => total + tool.monthlySpend,
    0
  );

  const totalRecommendedSpend = auditResults.reduce(
    (total, tool) => total + tool.recommendedSpend,
    0
  );

  const totalSavings = auditResults.reduce(
    (total, tool) => total + tool.savings,
    0
  );

  const annualSavings = totalSavings * 12;

  return (

    <section className="w-full bg-black text-white py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold mb-4">
            Select Your AI Tools
          </h1>

          <p className="text-zinc-400 text-lg">
            Choose the tools your team currently uses.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tools.map((tool) => (

            <ToolCard
              key={tool.id}
              tool={tool}
              isSelected={selectedTools.includes(tool.name)}
              onSelect={handleToolSelect}
              toolData={toolInputs[tool.name]}
              onInputChange={handleInputChange}
            />

          ))}

        </div>

      </div>

      {/* TOP SUMMARY CARDS */}

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-2">

          <p className="text-zinc-400 mb-3">
            Total Monthly Spend
          </p>

          <h2 className="text-4xl font-bold">
            ${totalCurrentSpend.toFixed(0)}
          </h2>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-2">

          <p className="text-zinc-400 mb-3">
            Optimized Spend
          </p>

          <h2 className="text-4xl font-bold text-green-400">
            ${totalRecommendedSpend.toFixed(0)}
          </h2>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-2">

          <p className="text-zinc-400 mb-3">
            Estimated Savings
          </p>

          <h2 className="text-4xl font-bold text-green-500">
            ${totalSavings.toFixed(0)}
          </h2>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-2">

          <p className="text-zinc-400 mb-3">
            Annual Savings
          </p>

          <h2 className="text-4xl font-bold text-blue-400">
            ${annualSavings.toFixed(0)}
          </h2>

        </div>

      </div>

      {/* ANNUAL COMPARISON */}

      <div className="mt-20 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Monthly vs Annual Comparison
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800">

            <p className="text-zinc-400 mb-3">
              Current Annual Spend
            </p>

            <h3 className="text-4xl font-bold">
              ${(totalCurrentSpend * 12).toFixed(0)}
            </h3>

          </div>

          <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800">

            <p className="text-zinc-400 mb-3">
              Optimized Annual Spend
            </p>

            <h3 className="text-4xl font-bold text-green-400">
              ${(totalRecommendedSpend * 12).toFixed(0)}
            </h3>

          </div>

          <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800">

            <p className="text-zinc-400 mb-3">
              Potential Yearly Savings
            </p>

            <h3 className="text-4xl font-bold text-blue-400">
              ${annualSavings.toFixed(0)}
            </h3>

          </div>

        </div>

      </div>

      {/* AUDIT SUMMARY */}

      <div className="mt-20 px-6 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Audit Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {auditResults.map((result, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >

              <div className="flex items-center justify-between mb-6">

                <h3 className="text-3xl font-semibold">
                  {result.toolName}
                </h3>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold
                  ${
                    result.riskLevel === "High"
                      ? "bg-red-500/20 text-red-400 border border-red-500/40"
                      : result.riskLevel === "Medium"
                      ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/40"
                      : "bg-green-500/20 text-green-400 border border-green-500/40"
                  }`}
                >
                  {result.riskLevel} Risk
                </span>

              </div>

              <div className="space-y-4 text-lg">

                <p className="text-zinc-300">
                  Current Spend:
                  <span className="text-white font-semibold ml-2">
                    ${result.monthlySpend}
                  </span>
                </p>

                <p className="text-zinc-300">
                  Recommended Spend:
                  <span className="text-green-400 font-semibold ml-2">
                    ${result.recommendedSpend.toFixed(0)}
                  </span>
                </p>

                <p className="text-zinc-300">
                  Estimated Savings:
                  <span className="text-green-500 font-semibold ml-2">
                    ${result.savings.toFixed(0)}
                  </span>
                </p>

              </div>

              <div className="mt-6 p-4 rounded-2xl bg-zinc-800/60 border border-zinc-700">

                <p className="text-zinc-300 leading-relaxed">
                  {result.recommendation}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ToolSelector;