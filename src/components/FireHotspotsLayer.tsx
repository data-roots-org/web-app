/* eslint-disable @typescript-eslint/no-explicit-any */
import { Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";

interface FireHotspot {
  lat: number;
  lng: number;
  acq_date: string;
  acq_time: string;
  confidence: number;
}

const FireHotspotsLayer = () => {
  const [hotspots, setHotspots] = useState<(FireHotspot | null)[]>([]);
  const [, setIsLoading] = useState(true);
  const [, setError] = useState<string | null>(null);

  const fireIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/785/785116.png",
    iconSize: [25, 25],
  });
  useEffect(() => {
    const fetchFireData = async () => {
      // -21.570611, -48.287659, -20.802337, -47.296143
      const url = `https://firms.modaps.eosdis.nasa.gov/api/area/csv/524334388aaa819d21a145d0d7a5146a/VIIRS_SNPP_NRT/-48.30,-21.60,-47.30,-20.80/7`;

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
    <>
      {hotspots.map((point, index) =>
        point ? (
          <Marker key={index} position={[point.lat, point.lng]} icon={fireIcon}>
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
    </>
  );
};

export default FireHotspotsLayer;
