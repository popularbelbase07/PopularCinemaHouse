import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import coordinateDTO from "./coordinates.model";
import MapClick from "./MapClick";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props: mapProps) {
  const [coordinates, setCoordinates] = useState<coordinateDTO[]>( props.coordinates );  

  return (
    <>
      <MapContainer
        center={[27.70597, 85.31528]}
        zoom={13}
        style={{ height: props.height }}
      >
        <TileLayer
          attribution="Oracle Cinema House"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.readOnly ? null : (
          <MapClick
            setCoordinates={(coordinates) => {
              setCoordinates([coordinates]);
              props.handleMapClick(coordinates);
            }}
          />
        )}

        {/* Create a movie Theater's name display using popup */}
        {coordinates.map((coordinate, index) => (
          <Marker
            key={index}
            position={[coordinate.latitude, coordinate.longitude]}
          >
            {coordinate.name ? <Popup>{coordinate.name}</Popup> : null}
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

interface mapProps {
  height: string;
  // for MapField component
  coordinates: coordinateDTO[];
  handleMapClick(coordinates: coordinateDTO): void;
  //Display The movie theaters and do not allow the movement of marker using readonly state
  readOnly: boolean;
}

Map.defaultProps = {
  height: "400px",
  handleMapClick: () => {},
  readOnly: false
};
