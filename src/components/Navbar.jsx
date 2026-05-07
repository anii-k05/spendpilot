function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 border-b border-gray-800">
      <h1 className="text-2xl font-bold text-white">
        SpendPilot
      </h1>

      <button className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
        Start Audit
      </button>
    </nav>
  );
}

export default Navbar;