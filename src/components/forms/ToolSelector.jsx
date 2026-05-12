import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import tools from "../../data/tools";
import ToolCard from "./ToolCard";
import { 
  calculateSavings,
  generateRecommendation,
} from "../../utils/auditEngine";
import generateAISummary from "../../utils/aiSummaryGenerator";
import {
  saveAuditReport,
  getAuditReports,
} from "../../utils/database";

import { saveLead } from "../../utils/leads";
const ToolSelector = () => {

  const [selectedTools, setSelectedTools] = useState([]);
  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [savedReports, setSavedReports] = useState([]);

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

  const handleLeadInputChange = (field, value) => {

    setLeadData((prev) => ({
      ...prev,
      [field]: value,
    }));

  };
  useEffect(() => {

    localStorage.setItem(
      "spendpilot-tool-data",
      JSON.stringify(toolInputs)
    );

  }, [toolInputs]);

  useEffect(() => {

    const fetchReports = async () => {

      const reports = await getAuditReports();

      if (reports) {
        setSavedReports(reports);
      }

    };

    fetchReports();

  }, []);

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
  const aiSummary = generateAISummary(auditResults);
  const handleGenerateReport = async () => {

    if (selectedTools.length === 0) {
      toast.error("Please select at least one AI tool.");
      return;
    }

    if (auditResults.length === 0) {
      toast.error("Please fill the tool details first.");
      return;
    }
    if (
        !leadData.name ||
        !leadData.email ||
        !leadData.company
       ) {

        toast.error("Please fill all lead details.");
        return;

      }

    try {
      await saveLead({
      name: leadData.name,
      email: leadData.email,
      company: leadData.company,
    });
      for (const result of auditResults) {

        await saveAuditReport({
          tool_name: result.toolName,
          monthly_spend: result.monthlySpend,
          recommended_spend: result.recommendedSpend,
          savings: result.savings,
          risk_level: result.riskLevel,
          ai_summary: aiSummary,
        });

      }

      toast.success("Audit report saved successfully!");

      } catch (error) {

        console.error(error);

        toast.error("Failed to save audit report.");

    }
  };

  return (

    <section
      id="audit-section"
      className="w-full bg-black text-white py-32 overflow-x-hidden"
    >

      <div className="w-full max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold mb-4">
            Select Your AI Tools
          </h1>

          <p className="text-zinc-400 text-lg">
            Choose the tools your team currently uses.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto mt-10 " >

        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 flex flex-col justify-center min-h-[80px] hover:border-zinc-700 transition-all duration-300">

          <p className="text-zinc-400 mb-3">
            Total Monthly Spend
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            ${totalCurrentSpend.toFixed(0)}
          </h2>

        </div>

        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 flex flex-col justify-center min-h-[80px] hover:border-zinc-700 transition-all duration-300">

          <p className="text-zinc-400 mb-3">
            Optimized Spend
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            ${totalRecommendedSpend.toFixed(0)}
          </h2>

        </div>

        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 flex flex-col justify-center min-h-[80px] hover:border-zinc-700 transition-all duration-300">

          <p className="text-zinc-400 mb-3">
            Estimated Savings
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            ${totalSavings.toFixed(0)}
          </h2>

        </div>

        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 flex flex-col justify-center min-h-[120px] hover:border-zinc-700 transition-all duration-300">

          <p className="text-zinc-400 mb-3">
            Annual Savings
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            ${annualSavings.toFixed(0)}
          </h2>

        </div>

      </div>

      <div className=" 
        mt-16
        bg-zinc-900/80
        backdrop-blur-sm
        border
        border-zinc-800
        rounded-[32px]
        px-12 py-16
        max-w-7xl
        mx-auto
        shadow-[0_0_40px_rgba(255,255,255,0.03)]
      ">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Monthly vs Annual Comparison
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-zinc-950/80 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-all duration-300">

            <p className="text-zinc-400 mb-3">
              Current Annual Spend
            </p>

            <h3 className="text-5xl font-bold">
              ${(totalCurrentSpend * 12).toFixed(0)}
            </h3>

          </div>

          <div className="bg-zinc-950/80 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-all duration-300">

            <p className="text-zinc-400 mb-3">
              Optimized Annual Spend
            </p>

            <h3 className="text-5xl font-bold text-green-400">
              ${(totalRecommendedSpend * 12).toFixed(0)}
            </h3>

          </div>

          <div className="bg-zinc-950/80 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-all duration-300">

            <p className="text-zinc-400 mb-3">
              Potential Yearly Savings
            </p>

            <h3 className="text-5xl font-bold text-blue-400">
              ${annualSavings.toFixed(0)}
            </h3>

          </div>

        </div>

      </div>
      <div className="mt-24 px-6 max-w-7xl mx-auto">
      

        <div className="
          bg-zinc-900/80
          backdrop-blur-sm
          border
          border-zinc-800
          rounded-[32px]
          p-12
          shadow-[0_0_40px_rgba(255,255,255,0.03)]
        ">

          <h2 className="text-4xl font-bold mb-8 text-center">
            Save Your Audit Report
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            <input
              type="text"
              placeholder="Your Name"
              value={leadData.name}
              onChange={(e) =>
                handleLeadInputChange("name", e.target.value)
              }
              className="
                bg-zinc-950
                border
                border-zinc-700
                rounded-2xl
                px-5
                py-4
                text-white
                outline-none
                focus:border-green-500
                transition-all
                duration-300"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={leadData.email}
              onChange={(e) =>
                handleLeadInputChange("email", e.target.value)
              }
              className="
                bg-zinc-950
                border
                border-zinc-700
                rounded-2xl
                px-5
                py-4
                text-white
                outline-none
                focus:border-green-500
                transition-all
                duration-300"
            />

            <input
              type="text"
              placeholder="Company Name"
              value={leadData.company}
              onChange={(e) =>
                handleLeadInputChange("company", e.target.value)
              }
              className="
                bg-zinc-950
                border
                border-zinc-700
                rounded-2xl
                px-5
                py-4
                text-white
                outline-none
                focus:border-green-500
                transition-all
                duration-300"
            />

          </div>

        </div>

      </div>

      {/* AI EXECUTIVE SUMMARY */}

      <div className="mt-24 px-6 max-w-7xl mx-auto">

        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-10">

          <div className="flex items-center justify-center gap-3 mb-8">

            <div className="w-4 h-4 rounded-full bg-green-500"></div>

            <h2 className="text-4xl font-bold">
              AI Executive Summary
            </h2>

          </div>

          <p className="text-zinc-300 text-xl leading-relaxed text-center max-w-5xl mx-auto">
            {aiSummary}
          </p>

        </div>

      </div>

      <div className="w-full max-w-7xl mx-auto px-6 mt-124 mb-24">

        <div className="flex justify-center pt-16 pb-20">

          <button
            onClick={handleGenerateReport}
            className="
              bg-green-500
              hover:bg-green-400
              text-black
              font-bold
              px-10
              py-4
              rounded-2xl
              transition-all
              duration-300
              hover:scale-105
              shadow-[0_0_30px_rgba(34,197,94,0.35)]
            "
          >
            Generate & Save Audit Report
          </button>

        </div>

      </div>


      {/* AUDIT SUMMARY */}

      <div className="mt-24 px-6 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Audit Summary
        </h2>

        <div
          className={`
            grid grid-cols-1 md:grid-cols-2 gap-8
            ${auditResults.length === 0 ? "min-h-[140px]" : ""}
          `}
        >

          {auditResults.map((result, index) => (

            <div
              key={index}
              className="
                bg-zinc-900/80
                backdrop-blur-sm
                border
                border-zinc-800
                rounded-[32px]
                p-10
                hover:border-zinc-700
                hover:-translate-y-1
                transition-all
                duration-300
                shadow-[0_0_30px_rgba(255,255,255,0.03)]"
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

              <div
              className={`mt-6 p-4 rounded-2xl border
              ${
                result.riskLevel === "High"
                  ? "bg-red-500/10 border-red-500/30"
                  : result.riskLevel === "Medium"
                  ? "bg-yellow-500/10 border-yellow-500/30"
                  : "bg-green-500/10 border-green-500/30"
              }`}
              >

                <p className="text-zinc-300 leading-relaxed">
                  {result.recommendation}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
      
      {/* SAVED REPORTS */}

    <div className="mt-24 px-6 max-w-7xl mx-auto">

      <h2 className="text-4xl font-bold mb-10 text-center">
        Saved Audit Reports
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {savedReports.map((report) => (

          <div
            key={report.id}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
          >

            <div className="flex items-center justify-between mb-4">

              <h3 className="text-2xl font-semibold">
                {report.tool_name}
              </h3>

              <span
                className={`px-3 py-1 rounded-full text-sm
                ${
                  report.risk_level === "High"
                    ? "bg-red-500/20 text-red-400"
                    : report.risk_level === "Medium"
                    ? "bg-yellow-500/20 text-yellow-300"
                    : "bg-green-500/20 text-green-400"
                }`}
              >
                {report.risk_level} Risk
              </span>

            </div>

            <div className="space-y-2 text-zinc-300">

              <p>
                Monthly Spend:
                <span className="text-white ml-2">
                  ${report.monthly_spend}
                </span>
              </p>

              <p>
                Recommended Spend:
                <span className="text-green-400 ml-2">
                  ${report.recommended_spend}
                </span>
              </p>

              <p>
                Savings:
                <span className="text-blue-400 ml-2">
                  ${report.savings}
                </span>
              </p>

            </div>

            <div className="mt-5 p-4 rounded-2xl bg-zinc-950 border border-zinc-800">

              <p className="text-zinc-300">
                {report.ai_summary}
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