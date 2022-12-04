import ActorForm from "./ActorForms";

export default function CreateActor(){
    return(
        <>
        <h3>Create Actors</h3>
       <ActorForm model = {{name: 'Tom Cruise',
        dateOfBirth: undefined}}
       onSubmit ={values => console.log(values)}
       />
        </>
    )
}