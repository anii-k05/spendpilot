const Stats = () => {
  return (
    <section className="w-full py-24 bg-black text-white mb-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

       <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-3xl p-10 overflow-hidden min-h-[80px] hover:scale-[1.02] hover:border-zinc-600 transition-all duration-300 text-center flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-green-400">30%</h1>
          <p className="text-zinc-400 mt-4 leading-relaxed break-words">
            Average reduction in AI spending
          </p>
        </div>

        <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-3xl p-10 overflow-hidden min-h-[80px] hover:scale-[1.02] hover:border-zinc-600 transition-all duration-300 text-center flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-blue-400">500+</h1>
          <p className="text-zinc-400 mt-4 leading-relaxed break-words">
            Teams analyzed successfully
          </p>
        </div>

        <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-3xl p-10 overflow-hidden min-h-[80px] hover:scale-[1.02] hover:border-zinc-600 transition-all duration-300 text-center flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-purple-400">$2M+</h1>
          <p className="text-zinc-400 mt-4 leading-relaxed break-words">
            AI expenses optimized
          </p>
        </div>

      </div>
    </section>
  )
}

export default Stats