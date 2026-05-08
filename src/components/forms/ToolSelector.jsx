import { useEffect, useState } from "react";
import tools from "../../data/tools";
import ToolCard from "./ToolCard";

const ToolSelector = () => {

  const [selectedTools, setSelectedTools] = useState([]);

  const [toolInputs, setToolInputs] = useState(() => {

    const savedData = localStorage.getItem("spendpilot-tool-data");

    return savedData ? JSON.parse(savedData) : {};

  });

  // HANDLE TOOL SELECTION

  const handleToolSelect = (toolName) => {

    if (selectedTools.includes(toolName)) {

      setSelectedTools(
        selectedTools.filter((tool) => tool !== toolName)
      );

    } else {

      setSelectedTools([...selectedTools, toolName]);

    }
  };

  // HANDLE INPUT CHANGES

  const handleInputChange = (toolName, field, value) => {

    setToolInputs((prev) => ({
      ...prev,

      [toolName]: {
        ...prev[toolName],
        [field]: value,
      },

    }));
  };

  // SAVE TO LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(
      "spendpilot-tool-data",
      JSON.stringify(toolInputs)
    );

  }, [toolInputs]);

  return (

    <section className="w-full bg-black text-white py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold mb-4">
            Select Your AI Tools
          </h1>

          <p className="text-zinc-400 text-lg">
            Choose the tools your team currently uses.
          </p>

        </div>

        {/* TOOL GRID */}

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

    </section>
  );
};

export default ToolSelector;