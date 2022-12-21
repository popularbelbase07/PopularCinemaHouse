
import { useMapEvent } from 'react-leaflet';
import coordinateDTO from './coordinates.model';
// This is a component that handle the leaflet map
export default function MapClick(props: mapClickProps){
useMapEvent('click', eventArgs => {
    props.setCoordinates({latitude: eventArgs.latlng.lat, longitude: eventArgs.latlng.lng})
})
    return null;

}

interface mapClickProps{
    setCoordinates( setCoordinates: coordinateDTO) : void
}