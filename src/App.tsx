import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "leaflet/dist/leaflet.css";
import PlantingSimulatorPage from "./pages/PlantingSimulator";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex text-gray-800">
      <Sidebar />
      <main className="flex-1 p-8 ml-72">
        <Header />
        <div className="mt-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/simulator" element={<PlantingSimulatorPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
