const ToolCard = ({
  tool,
  isSelected,
  onSelect,
  toolData,
  onInputChange,
}) => {

  const { name, description, logo } = tool;

  return (

    <div
      onClick={() => onSelect(name)}
      className={`

      bg-zinc-900/70
      border
      rounded-3xl
      p-8
      min-h-[180px]
      transition-all
      duration-300
      cursor-pointer

      ${
        isSelected
          ? "border-green-500 shadow-[0_0_25px_rgba(34,197,94,0.35)] scale-[1.02]"
          : "border-zinc-800 hover:border-zinc-600 hover:scale-[1.02]"
      }

      `}
    >

      {/* TOP SECTION */}

      <div className="flex items-center gap-6">

        <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center overflow-hidden shrink-0">

          <img
            src={logo}
            alt={name}
            className="w-10 h-10 object-contain"
          />

        </div>

        <div>

          <h2 className="text-3xl font-semibold mb-2">
            {name}
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            {description}
          </p>

        </div>

      </div>

      {/* INPUT SECTION */}

      {isSelected && (

        <div className="mt-8 border-t border-zinc-800 pt-6 space-y-5">

          {/* Monthly Spend */}

          <div>

            <label className="block text-sm text-zinc-400 mb-2">
              Monthly Spend ($)
            </label>

            <input
              type="number"
              min="0"
              placeholder="Enter monthly spend"
              value={toolData?.spend || ""}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) =>
                onInputChange(name, "spend", e.target.value)
              }
              className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-green-500 invalid:border-red-500"
            />

          </div>

          {/* Seats */}

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

          {/* Usage */}

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