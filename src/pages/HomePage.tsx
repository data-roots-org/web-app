import InfoCards from "../components/InfoCards";
import MapSection from "../components/MapSection";

const HomePage = () => {
  return (
    <main className="px-4 lg:px-8 xl:px-12 py-6">
      <MapSection />
      <InfoCards />
    </main>
  );
};

export default HomePage;
