import React, { useState } from "react";
import { MapContainer, TileLayer , Marker} from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import MapClick from "./MapClick";
import coordinateDTO from "./coordinates.model";


let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props: mapProps) {

  const [coordinates, setCoordinates] = useState<coordinateDTO[]>([]);

  return (
    <>
      <MapContainer
        center={[27.70597, 85.31528]}
        zoom={15}
        style={{ height: props.height }}
      >
        <TileLayer
          attribution="Movie Catalog"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClick
        setCoordinates={coordinates =>{
setCoordinates([coordinates]);
        }}
        />
        {coordinates.map((coordinate, index) => <Marker  key = {index}   position = {[coordinate.latitude, coordinate.langitude]}/>)}
      </MapContainer>
    </>
  );
}

interface mapProps {
  height: string;
}

Map.defaultProps = {
  height: "400px",
};
