import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { actorsMovieDTO } from "../actors/Actors.model";

// The parent component is MovieForm.tsx

export default function TypeAheadActors(props: typeAheadActorsProps){

const actors: actorsMovieDTO[] = [
    {    id: 1, name: "Jonny Dopp", character: "Hero", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYvUfImOGggY0xxqRN4-_F7_zrrwrLpd5mg&usqp=CAU" },
    {    id: 2, name: "Jessica", character: "Heroine", picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jessica-Alba-The-Eye.JPG/170px-Jessica-Alba-The-Eye.JPG" },
    {    id: 3, name: "Leanardo", character: "Lead Actor", picture: "https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg" }

]
  //to remove the actor from the Typeahead actor name after actor would be selected
const selected : actorsMovieDTO[] = [];

//Updating the UI means need to change the state that comes from react Hooks UseState
const [draggedElement, setDraggedElement] = useState<actorsMovieDTO | undefined>(undefined);

// Create a function for drag and drop menu.
function handleDragStart(actor: actorsMovieDTO){
    setDraggedElement(actor) 
    }

    function handleDragOver(actor:actorsMovieDTO){
        if(!draggedElement){
            return;
        }
        else if(actor.id !== draggedElement.id){
             const draggedElementIndex = props.actors.findIndex(y => y.id === draggedElement.id);
             const actorIndex = props.actors.findIndex(y => y.id === actor.id);  
             const actors = [...props.actors]
             actors[actorIndex] = draggedElement;
             actors[draggedElementIndex] = actor;
             props.onAdd(actors)
        }
    }


    return(
        <div 
        className="mb-3">
        <label>{props.displayName}</label>
        <Typeahead
        id="typeahead"
        onChange = {actors => {
            //console.log(actors)
            // if the actor is already present then not going to add any actor 
            if(props.actors.findIndex(x => x.id === actors[0].id) === -1){
                props.onAdd([...props.actors, actors[0]]);
            }
            


        }}
        options= {actors}
        // This refer to the value want to use to display the option.
        labelKey = {actor => actor.name}
        filterBy= {['name']}
        placeholder="Write the name of the actor..."
        minLength={1} 
        flip = {true}
        selected = {selected}
        //display the picture of the actor
        renderMenuItemChildren = { actor => (
            <>
            <img
            alt="actor" src= {actor.picture}
            style= {{
                height:"64px",
                marginRight:"10px",
                width: '64px'
            }}
            />  
            <span>{actor.name}</span>
            </>
        )

        }
        />
        
        <ul className="list-group"
        >
            {/* {props.actors.map(actor => <li key = {actor.id}> {actor.name} </li>)} */}
            {props.actors.map(actor => 
            <li 
            key = {actor.id}

            //Drag and drop menu start for the actor list
            draggable={true}
            onDragStart= {() => handleDragStart(actor)}
            // The one element of the list goes over the another elemt of list should change it's own place and reOrder the list
            onDragOver = {() => handleDragOver(actor)}

            className="list-group-item list-group-item-action"
            > 
            {
                props.listUI(actor)
            }
             <span className="badge badge-danger badge-pill pointer text-dark"
             style={{marginLeft: '0.5rem'}}
             onClick={() => props.onRemove(actor)}
             >
                Delete
             </span>

            </li>)}
             </ul>
        </div>
    )
}

interface typeAheadActorsProps{
    displayName: string;
    actors: actorsMovieDTO[];
    onAdd(actors: actorsMovieDTO[]) : void;
    listUI(actor : actorsMovieDTO) : ReactElement;
    onRemove(actor:actorsMovieDTO): void;

}