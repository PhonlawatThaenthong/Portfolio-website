import Nav from "@/components/Nav";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Activities from "@/components/Activities";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Intro />
      <Projects />
      <Activities />
      <Footer />
    </main>
  );
}
