import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { useHistory, useParams } from "react-router-dom";
import DisplayError from "../DisplayError";
import Loading from "../Loading";

// The Generic Type components
export default function EditEntity<TCreation, TRead>(
  props: editEntityProps<TCreation, TRead>
) {
  const { id }: any = useParams();
  const [entity, setEntity] = useState<TCreation>();
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  //need to create a function tha immediately load the data after the component loads.
  useEffect(() => {
    axios.get(`${props.url}/${id}`).then((response: AxiosResponse<TRead>) => {
      setEntity(props.transform(response.data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function edit(entityToEdit: TCreation) {
    try {
      if (props.transformFormData) { 
        const formData = props.transformFormData(entityToEdit);
        await axios({
          method: "put",
          url: `${props.url}/${id} `,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.put(`${props.url}/${id}`, entityToEdit);
      }
      //history.push('/genres')
      history.push(props.indexUrl);
    } catch (error) {
      if (error) {
        setErrors(errors)
        console.log(error);
      }
    }
  }

  return (
    <>
      <h3>Edit {props.entityName}</h3>
      <DisplayError errors={errors} />
      {entity ? props.children(entity, edit) : <Loading />}
    </>
  );
}

interface editEntityProps<TCreation, TRead> {
  url: string;
  transform(entity: TRead): TCreation;
  transformFormData?(model: TCreation): FormData;
  entityName: string;
  children(
    entity: TCreation,
    editEntity: (entity: TCreation) => void
  ): ReactElement;
  indexUrl: string;
}

// Create a function  thaat helps to default implementation for transform Function
EditEntity.defaultProps = {
  transform: (entity: any) => entity,
};
