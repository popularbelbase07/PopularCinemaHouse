import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';


let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props: mapProps) {
  return (
    <>
      <MapContainer
        center={[27.70597, 85.31528]}
        zoom={14}
        style={{ height: props.height }}
      >
        <TileLayer
          attribution="Movie Catalog"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
}

interface mapProps {
  height: string;
}

Map.defaultProps = {
  height: "300px",
};
