import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";

interface FireHotspot {
  lat: number;
  lng: number;
  acq_date: string;
  acq_time: string;
  confidence: number;
}

const MapPage = () => {
  const [hotspots, setHotspots] = useState<(FireHotspot | null)[]>([]);
  const [, setIsLoading] = useState(true);
  const [, setError] = useState<string | null>(null);

  const fireIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/785/785116.png",
    iconSize: [25, 25],
  });

  useEffect(() => {
    const fetchFireData = async () => {
      // const apiKey = "525c557f8e33a674a280afa2d130f40e";
      // const url = `https://firms.modaps.eosdis.nasa.gov/api/country/csv/${apiKey}/VIIRS_SNPP_NRT/BRA/1`;
      const url = `https://firms.modaps.eosdis.nasa.gov/api/area/csv/524334388aaa819d21a145d0d7a5146a/VIIRS_SNPP_NRT/-47.90,-25.30,-42.60,-21.10/7`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvText = await response.text();

        const points = csvText
          .split("\n")
          .slice(1)
          .map((line) => {
            const columns = line.split(",");
            if (columns.length >= 12) {
              return {
                lat: parseFloat(columns[0]),
                lng: parseFloat(columns[1]),
                acq_date: columns[5],
                acq_time: columns[6],
                confidence: parseInt(columns[11]),
              };
            }
            return null;
          })
          .filter((point) => point && point.lat && point.lng);

        setHotspots(points);
      } catch (e) {
        console.error("Erro ao buscar dados do FIRMS:", e);
        setError("Não foi possível carregar os focos de incêndio.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFireData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Mapa de Teste - MapContainer
          </h1>
          <p className="text-gray-600">
            Página dedicada para testar o componente MapContainer do React
            Leaflet
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Mapa Interativo</h2>

          <div className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-300">
            <MapContainer
              center={[-18.9186, -48.2772]} // Centro aproximado de Uberlândia
              zoom={13}
              scrollWheelZoom={true}
              className="h-full w-full"
              style={{ height: "100vh", width: "100vw" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {hotspots.map((point, index) =>
                point ? (
                  <Marker
                    key={index}
                    position={[point.lat, point.lng]}
                    icon={fireIcon}
                  >
                    <Popup>
                      <b>Foco de Incêndio</b>
                      <br />
                      Data: {point.acq_date}
                      <br />
                      Hora: {point.acq_time}
                      <br />
                      Confiança: {point.confidence}%
                    </Popup>
                  </Marker>
                ) : null
              )}
            </MapContainer>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">
              Funcionalidades de Teste:
            </h3>
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
