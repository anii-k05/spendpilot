import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import ToolSelector from "../components/forms/ToolSelector";

function Home() {

  return (

    <main className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <section className="mt-8">
        <Stats />
      </section>

      <section className="mt-28">
        <Features />
      </section>

      <section className="mt-32 pb-32">
        <ToolSelector />
      </section>

    </main>

  );

}

export default Home;