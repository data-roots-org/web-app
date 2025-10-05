import Hero from "../components/Hero";
import MapSection from "../components/MapSection";
import Stats from "../components/Stats";

const HomePage = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <MapSection />
      <Stats />
    </div>
  );
};

export default HomePage;
