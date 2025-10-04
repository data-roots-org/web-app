import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Mapa de Teste - MapContainer
          </h1>
          <p className="text-gray-600">
            Página dedicada para testar o componente MapContainer do React Leaflet
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">
            Mapa Interativo
          </h2>

          <div className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-300">
            <MapContainer
              center={[-18.9186, -48.2772]} // Centro aproximado de Uberlândia
              zoom={13}
              scrollWheelZoom={true}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-18.9186, -48.2772]}>
                <Popup>
                  Centro de Uberlândia <br />
                  Mapa de teste para desenvolvimento.
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Funcionalidades de Teste:</h3>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Zoom com scroll do mouse</li>
              <li>• Arrastar o mapa</li>
              <li>• Marcador clicável com popup</li>
              <li>• Tiles do OpenStreetMap</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;