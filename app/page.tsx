import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "100px 100px",
      }}
    >
      <Header />
      <Hero />
      <Projects />
      <div className="hairline" />
      <About />
      <div className="hairline" />
      <Experience />
      <div className="hairline" />
      <Skills />
      <Footer />
    </main>
  );
}
