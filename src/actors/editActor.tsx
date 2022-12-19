import { urlActors } from "../endpoints";
import { convertActorToFormData } from "../Utils/actorFormDataUtils";
import EditEntity from "../Utils/Resuable Component/EditEntity";
import ActorForm from "./ActorForms";
import { actorCreationDTO, actorDTO } from "./Actors.model";


export default function EditActor(){

    // return actorCreationDTO
    function transform(actor: actorDTO) : actorCreationDTO{
return{
    name: actor.name,
    pictureURL : actor.picture,
    biography: actor.biography,
    dateOfBirth: new Date(actor.dateOfBirth)
   
}
    }
    return(
       <EditEntity<actorCreationDTO, actorDTO>
        url = {urlActors} indexUrl = "/actors" entityName="Actor"
        transformFormData={convertActorToFormData}
        transform={transform}
       >
        {(entity, edit) => 
        <ActorForm
        model={entity}
        onSubmit={async values => await edit(values)}
        />}


       </EditEntity>
    )
}