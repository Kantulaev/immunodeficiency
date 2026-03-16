import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoGrid from "./components/InfoGrid";
import VideoCourse from "./components/VideoCourse";
import GlobalImpact from "./components/GlobalImpact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <Hero />
      <InfoGrid />
      <VideoCourse />
      <GlobalImpact />
      <Footer />
    </div>
  );
}
