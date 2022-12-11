import { Typeahead } from "react-bootstrap-typeahead";
import { actorsMovieDTO } from "../actors/Actors.model";

// The parent component is MovieForm.tsx

export default function TypeAheadActors(props: typeAheadActorsProps){

const actors: actorsMovieDTO[] = [
    {    id: 1, name: "Jonny Dopp", character: "Hero", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYvUfImOGggY0xxqRN4-_F7_zrrwrLpd5mg&usqp=CAU" },
    {    id: 2, name: "Jessica", character: "Heroine", picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jessica-Alba-The-Eye.JPG/170px-Jessica-Alba-The-Eye.JPG" },
    {    id: 3, name: "Leanardo", character: "Lead Actor", picture: "https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg" }

]

    return(
        <div 
        className="mb-5">
        <label>{props.displayName}</label>
        <Typeahead
        id="typeahead"
        onChange = {actor => {
            console.log(actor)

        }}
        options= {actors}
        // This refer to the value want to use to display the option.
        labelKey = {actor => actor.name}
        filterBy= {['name']}
        placeholder="Write the name of the actor..."
        minLength={1} 
        />
        
        
        </div>
    )
}

interface typeAheadActorsProps{
    displayName: string;
    actors: actorsMovieDTO[];
}