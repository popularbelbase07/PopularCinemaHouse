import { useFormikContext } from "formik";
import coordinateDTO from "../Utils/MapContainer/coordinates.model";
import Map from '../Utils/MapContainer/Map';

export default function MapField(props: mapFieldProps){

    const {values} = useFormikContext<any>();


function handleMapClick(coordinates: coordinateDTO){

    // Implementation of HandleMapClick
    values[props.latField] = coordinates.latitude;
    values[props.lngField] = coordinates.langitude;

    
}

    return(


       <Map 
       coordinates = {props.coordinates}
       handleMapClick = {handleMapClick}
       
       />
    )
}

interface mapFieldProps{
coordinates : coordinateDTO[];
latField: string;
lngField: string;

}

MapField.defaultProps = {
coordinates : []
}