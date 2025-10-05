import { Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import HomePage from "./pages/HomePage";


import Header from './components/Header';
import LibraryPage from "./pages/LibraryPage";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/biblioteca" element={<LibraryPage />} />
      </Routes>
    </div>
  );
}

export default App;