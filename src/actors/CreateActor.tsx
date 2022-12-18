import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlActors } from "../endpoints";
import { convertActorToFormData } from "../Utils/actorFormDataUtils";
import DisplayError from "../Utils/DisplayError";
import ActorForm from "./ActorForms";
import { actorCreationDTO } from "./Actors.model";

export default function CreateActor() {
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  async function create(actor: actorCreationDTO) {
    try {
      const formData = convertActorToFormData(actor);

      await axios({
        method: 'post',
        url: urlActors,
        data: formData,
        headers: {'Content-Type': 'multipart/form-data',
        'Accept': 'multipart/form-data' } 
      });
      history.push("/actors");
    } 
    catch (error) {
      setErrors(errors);
      console.error(error);
    }
  }
  return (
    <>
      <h3>Create Actors</h3>
      <DisplayError errors={errors} />
      <ActorForm
        model={{ name:'', dateOfBirth: undefined }}
       onSubmit = { async values => await create(values)    }
      />
    </>
  );
}
