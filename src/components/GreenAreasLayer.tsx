/* eslint-disable @typescript-eslint/no-explicit-any */
import { GeoJSON, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import type { FeatureCollection } from 'geojson';
import L from 'leaflet';

const GreenAreasLayer = () => {
  const [geoJsonData, setGeoJsonData] = useState<FeatureCollection | null>(null);
  const map = useMap();

  useEffect(() => {
    fetch('/ribeirao-preto.geojson')
      .then((response) => response.json())
      .then((data) => {
        setGeoJsonData(data);
        
        const bounds = L.geoJSON(data).getBounds();
        if (bounds.isValid()) {
          map.fitBounds(bounds);
        }

      })
      .catch((error) => console.error("Erro ao carregar o GeoJSON:", error));
  }, [map]);

  const styleGeoJSON = () => {
    return {
      fillColor: '#28a745',
      weight: 1,
      opacity: 1,
      color: '#006400',
      fillOpacity: 0.5,
    };
  };

  const onEachFeature = (feature: any, layer: any) => {
    if (feature.properties && feature.properties.NOME) {
      layer.bindPopup(feature.properties.NOME);
    }
  };

  const filterPolygons = (feature: any) => {
    return feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon';
  };
  
  if (!geoJsonData) {
    return null;
  }

  return (
    <GeoJSON 
      data={geoJsonData} 
      style={styleGeoJSON}
      onEachFeature={onEachFeature}
      filter={filterPolygons}
    />
  );
};

export default GreenAreasLayer;