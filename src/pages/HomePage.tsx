import InfoCards from "../components/InfoCards";
import MapSection from "../components/MapSection";
import PreventionGuide from "../components/PrevetionGuide";

const HomePage = () => {
  return (
    <main className="px-4 lg:px-8 xl:px-12 py-6">
      <MapSection />
      <InfoCards />
      <PreventionGuide />
    </main>
  );
};

export default HomePage;
