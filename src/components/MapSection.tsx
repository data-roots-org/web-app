import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import GreenAreasLayer from "./GreenAreasLayer";

type ToggleSwitchProps = {
  label: string;
  isEnabled: boolean;
  onToggle: () => void;
};

const ToggleSwitch = ({ label, isEnabled, onToggle }: ToggleSwitchProps) => {
  return (
    <div className="flex items-center justify-between bg-green-100/70 p-2 rounded-md">
      <label className="text-sm text-green-800 font-medium select-none">
        {label}
      </label>
      <div
        onClick={onToggle}
        className={`w-10 h-5 flex items-center rounded-full p-0.5 cursor-pointer transition-colors ${
          isEnabled ? "bg-green-400" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
            isEnabled ? "translate-x-5" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};


type FilterSidebarProps = {
  isUltimas24h: boolean;
  onToggleUltimas24h: () => void;
  isAltoRisco: boolean;
  onToggleAltoRisco: () => void;
  isGreenArea: boolean;
  onToggleGreenArea: () => void;
};

const FilterSidebar = ({
  isUltimas24h,
  onToggleUltimas24h,
  isAltoRisco,
  onToggleAltoRisco,
  isGreenArea,
  onToggleGreenArea,
}: FilterSidebarProps) => {
  return (
    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg w-64 z-[1000] border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-800">Filtros</h3>
        <button className="text-xs text-gray-500 hover:text-gray-800">
          Minimizado
        </button>
      </div>

      <div className="space-y-3">
        <ToggleSwitch
          label="Últimas 24h"
          isEnabled={isUltimas24h}
          onToggle={onToggleUltimas24h}
        />
        <ToggleSwitch
          label="Alto Risco de Ignição"
          isEnabled={isAltoRisco}
          onToggle={onToggleAltoRisco}
        />
        <ToggleSwitch
          label="Área Verde"
          isEnabled={isGreenArea}
          onToggle={onToggleGreenArea}
        />
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="font-bold text-gray-800 mb-2">Legenda</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="text-gray-600">&lt; 10 hrs de foco</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-600 rounded-full"></span>
            <span className="text-gray-600">&gt; 10 hrs de foco</span>
          </div>
        </div>
      </div>
    </div>
  );
};


const MapSection = () => {
  const ribeiraoPretoCoords: [number, number] = [-21.1767, -47.8103];

  const [showUltimas24h, setShowUltimas24h] = useState(false);
  const [showAltoRisco, setShowAltoRisco] = useState(false);
  const [showGreenAreas, setShowGreenAreas] = useState(false);

  return (
    <div className="relative w-full h-[60vh] bg-gray-200 rounded-xl shadow-md overflow-hidden">
      <MapContainer
        center={ribeiraoPretoCoords}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {showGreenAreas && <GreenAreasLayer />}

      </MapContainer>

      <FilterSidebar
        isUltimas24h={showUltimas24h}
        onToggleUltimas24h={() => setShowUltimas24h(!showUltimas24h)}
        isAltoRisco={showAltoRisco}
        onToggleAltoRisco={() => setShowAltoRisco(!showAltoRisco)}
        isGreenArea={showGreenAreas}
        onToggleGreenArea={() => setShowGreenAreas(!showGreenAreas)}
      />
    </div>
  );
};

export default MapSection;