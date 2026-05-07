function Hero() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6 py-24">
      
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

        <p className="text-green-400 font-medium mb-6 text-lg">
          Reduce AI Tool Costs
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Find Hidden Savings In Your AI Stack
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">
          SpendPilot analyzes your AI subscriptions, API usage, and team plans to uncover overspending and recommend smarter alternatives.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-12">

          <button className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
            Run Free Audit
          </button>

          <button className="border border-zinc-700 text-white px-10 py-4 rounded-full text-lg hover:bg-zinc-900 transition-all duration-300">
            View Demo
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;