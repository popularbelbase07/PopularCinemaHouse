import ActorForm from "./ActorForms";

export default function EditActor(){
    return(
        <>
        <h3>Edit Actor</h3>
        <ActorForm model = {{name: 'Tom Cruise',
        dateOfBirth: new Date('1985-04-07T00:00:00'),
        biography: ` # Introduction 
        This famous person is born in **Nepal** `,
        pictureURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Arnold_Schwarzenegger_by_Gage_Skidmore.jpg/330px-Arnold_Schwarzenegger_by_Gage_Skidmore.jpg"

    
    }}
       onSubmit ={values => console.log(values)}
       />
        </>
    )
}