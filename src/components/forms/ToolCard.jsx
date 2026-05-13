const ToolCard = ({
  tool,
  isSelected,
  onSelect,
  toolData,
  onInputChange,
}) => {

  const { name, description, logo, plans } = tool;

  return (

    <div
      onClick={() => onSelect(name)}
      className={`

      bg-zinc-900/70
        border
        rounded-3xl
        p-6
        transition-all
        duration-300
        cursor-pointer
        flex
        flex-col
        justify-center
        h-full

      ${
        isSelected
          ? "border-green-500 shadow-[0_0_25px_rgba(34,197,94,0.35)] scale-[1.02]"
          : "border-zinc-800 hover:border-zinc-600 hover:scale-[1.02]"
      }

      `}
    >

      {/* TOP SECTION */}

      <div className="flex items-center gap-5">

        <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden shrink-0 mt-1">

          <img
            src={logo}
            alt={name}
            className="w-11 h-11 object-contain"
          />

        </div>

        <div>

          <h2 className="text-2xl font-semibold mb-2 leading-tight">
            {name}
          </h2>

          <p className="text-zinc-400 text-base leading-relaxed max-w-sm">
            {description}
          </p>

        </div>

      </div>

      {/* INPUT SECTION */}

      {isSelected && (

        <div className="mt-6 border-t border-zinc-800 pt-5 pb-6 space-y-4">

          {/* Plan Selection */}

          <div>

            <label className="block text-sm text-zinc-400 mb-2">
              Select Plan
            </label>

            <select
              value={toolData?.selectedPlan || ""}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => {

                const selectedPlan = plans.find(
                  (plan) => plan.name === e.target.value
                );

                onInputChange(name, "selectedPlan", selectedPlan.name);

                onInputChange(
                  name,
                  "monthlySpend",
                  selectedPlan.price
                );

              }}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-green-500"
            >

              <option value="">Select plan</option>

              {plans.map((plan) => (

                <option
                  key={plan.name}
                  value={plan.name}
                >
                  {plan.name} 
                </option>

              ))}

            </select>

          </div>

          {}

          <div>

            <label className="block text-sm text-zinc-400 mb-2" >
              Number of Seats
            </label>

            <input
              type="number"
              min="1"
              step="1"
              placeholder="Enter seat count"
              value={toolData?.seats || ""}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) =>
                onInputChange(name, "seats", e.target.value)
              }
              className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-green-500 invalid:border-red-500" 
            />

          </div>

          {}

          <div>

            <label className="block text-sm text-zinc-400 mb-2">
              Usage Frequency
            </label>

            <select
              value={toolData?.usage || ""}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) =>
                onInputChange(name, "usage", e.target.value)
              }
              className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-green-500"
            >

              <option value="">Select usage</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Occasionally">Occasionally</option>

            </select>

          </div>

        </div>

      )}

    </div>
  );
};

export default ToolCard;