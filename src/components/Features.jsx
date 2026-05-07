const Features = () => {
  return (
    <section className="w-full bg-black text-white py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Why Teams Choose SpendPilot
          </h1>

          <p className="text-zinc-400 mt-4 text-lg">
            Smart AI cost analysis powered by automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 min-h-[220px] overflow-hidden hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 text-center flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-6">
              AI Cost Tracking
            </h2>

            <p className="text-zinc-400 leading-relaxed break-words">
              Monitor subscriptions, API usage, and hidden AI expenses in one dashboard.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 min-h-[220px] overflow-hidden hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 text-center flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-6">
              Smart Recommendations
            </h2>

            <p className="text-zinc-400 leading-relaxed break-words">
              Get AI-powered suggestions to reduce overspending and optimize plans.
            </p>
          </div>

         <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 min-h-[220px] overflow-hidden hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 text-center flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-6">
              Team Insights
            </h2>

            <p className="text-zinc-400 leading-relaxed break-words">
              Understand which tools your team actually uses and eliminate waste.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Features