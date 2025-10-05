import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapSection = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold">Cobertura Arbórea de Uberlândia</h3>
        <p className="text-gray-500">
          Explore o mapa de calor e filtre por bairros.
        </p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold">Mapa de calor interativo</h4>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100">
              Filtros
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100">
              Bairros
            </button>
          </div>
        </div>
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <MapContainer
            center={[-18.9186, -48.2772]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
