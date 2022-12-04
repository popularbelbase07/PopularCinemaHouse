import ActorForm from "./ActorForms";

export default function EditActor(){
    return(
        <>
        <h3>Edit Actor</h3>
        <ActorForm model = {{name: 'Tom Cruise',
        dateOfBirth: new Date('1985-04-07T00:00:00')}}
       onSubmit ={values => console.log(values)}
       />
        </>
    )
}