function Navbar() {

  const scrollToAudit = () => {

    const auditSection = document.getElementById("audit-section");

    if (auditSection) {

      auditSection.scrollIntoView({
        behavior: "smooth",
      });

    }

  };

  return (

    <nav className="sticky top-0 z-50 w-full bg-black border-b border-zinc-900">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-white tracking-tight">
          SpendPilot
        </h1>

        <button
          onClick={scrollToAudit}
          className="bg-green-500 text-black px-5 py-2.5 rounded-xl font-semibold hover:bg-green-400 transition-all duration-300"
        >
          Start Audit
        </button>

      </div>

    </nav>

  );

}

export default Navbar;