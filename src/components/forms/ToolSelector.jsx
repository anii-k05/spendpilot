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

  return {
    toolName,
    monthlySpend,
    recommendedSpend,
    savings,
    recommendation,
  };

}).filter(Boolean);

  return (

    <section className="w-full bg-black text-white py-24">

      <div className="max-w-6xl mx-auto px-6">

        {}

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold mb-4">
            Select Your AI Tools
          </h1>

          <p className="text-zinc-400 text-lg">
            Choose the tools your team currently uses.
          </p>

        </div>

        {}

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
        
      <div className="mt-20">

  <h2 className="text-4xl font-bold mb-10 text-center">
    Audit Summary
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {auditResults.map((result, index) => (

      <div
        key={index}
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
      >

        <h3 className="text-3xl font-semibold mb-6">
          {result.toolName}
        </h3>

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