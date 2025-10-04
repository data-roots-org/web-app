import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MapSection from "./components/MapSection";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="bg-gray-50 min-h-screen flex text-gray-800">
            <Sidebar />
            <main className="flex-1 p-8 ml-64">
              <Header />
              <div className="mt-8 space-y-12">
                <Hero />
                <MapSection />
                <Stats />
              </div>
            </main>
          </div>
        } />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
