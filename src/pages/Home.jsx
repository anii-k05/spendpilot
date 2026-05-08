import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats"
import Features from "../components/Features"
import ToolSelector from "../components/forms/ToolSelector";

function Home() {
  return (
    <div className="space-y-32">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <ToolSelector />
    </div>
  );
}

export default Home;