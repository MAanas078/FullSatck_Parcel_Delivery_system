import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import InteractiveTracking from "../components/InteractiveTracking";
import AnimatedTestimonials from "../components/AnimatedTestimonials";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <InteractiveTracking />
      <AnimatedTestimonials />
      <Footer />
    </div>
  );
}

export default Home;