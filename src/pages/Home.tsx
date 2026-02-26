import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import AdvocateProfile from "@/components/sections/AdvocateProfile";
const Home = () => {
  return (
    <main>
      <section id="home" className="min-h-screen"> <Hero /> </section>
      <section id="about" className="min-h-screen"> <About/> </section>
      <section id="advocate" className="min-h-screen"> <AdvocateProfile /> </section>
      <section id="services" className="min-h-screen"> <Services/> </section>
      <section id="contact" className="min-h-screen"> <Contact/> </section>
    </main>
  );
};

export default Home;