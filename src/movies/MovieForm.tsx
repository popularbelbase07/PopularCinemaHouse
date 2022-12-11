import { Form, Formik, FormikHelpers} from "formik";
import { movieCreationDTO } from "./Movies.Model";
import * as Yup from "yup";
import Button from "../Utils/Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckBoxField from "../forms/CheckBoxField";
import MultipleSelector, {
  multipleSelectorModel,
} from "../forms/MultipleSelactor";
import { genreDTO } from "../genres/Genres.model";
import { useState } from "react";
import { movieTheaterDTO } from "../movieTheaters/MovieTheater.model";
import TypeAheadActors from "../forms/TypeAheadActors";
import { actorsMovieDTO } from "../actors/Actors.model";

export default function MovieForm(props: movieFormProps) {
  // Selected and nonSelected genres has map from the array of the object using hooks
  const [selectedGenres, setSelectedGenres] = useState(
    mapToModel(props.selectedGenres)
  );
  const [nonSelectedGenres, setNonSelectedGenres] = useState(
    mapToModel(props.nonSelectedGenres)
  );

  // Same things for movie theaters that helps the moviecan be showing in several cinema houses.
  const [selectedMovieTheaters, setSelectedMovieTheaters] = useState(
    mapToModel(props.selectedMovieTheaters)
  );
  const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState(
    mapToModel(props.nonSelectedMovieTheater)
  );

  // create The react hook for working with displaying actors
  const [selectedActor, setSelectedActor] = useState(props.selectedActors);

  function mapToModel(
    items: { id: number; name: string }[]
  ): multipleSelectorModel[] {
    return items.map((item) => {
      return { key: item.id, value: item.name };
    });
  }

  return (
    <Formik
      initialValues={props.model}
      onSubmit={(values, actions) => {
        values.genresIds = selectedGenres.map((item) => item.key);
        values.movieTheaterIds = selectedMovieTheaters.map((item) => item.key);
        //Add the actors that are selected while doing dropdown
        values.actors = selectedActor;
        props.onSubmit(values, actions);
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required("This field is required")
          .firstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Title" field="title" />
          <CheckBoxField displayName="In Theaters" field="inTheaters" />
          <TextField displayName="Trailer" field="trailer" />
          <DateField displayName="Release Date" field="releaseDate" />
          <ImageField
            displayName=" Movie Poster"
            field="poster"
            imageURL={props.model.posterURL}
          />
          <MultipleSelector
            displayName="Genres"
            nonSelected={nonSelectedGenres}
            selected={selectedGenres}
            onChange={(selected, nonSelected) => {
              setSelectedGenres(selected);
              setNonSelectedGenres(nonSelected);
            }}
          />

          <MultipleSelector
            displayName="Movie Theaters"
            nonSelected={nonSelectedMovieTheaters}
            selected={selectedMovieTheaters}
            onChange={(selected, nonSelected) => {
              setSelectedMovieTheaters(selected);
              setNonSelectedMovieTheaters(nonSelected);
            }}
          />
          <TypeAheadActors
            displayName="Filter by Actors or Actress Name"
            actors={selectedActor}
            onAdd={(actors) => {
              setSelectedActor(actors);
            }}
            //Call onRemove function
            onRemove={(actor) => {
              const actors = selectedActor.filter((x) => x !== actor);
              setSelectedActor(actors);
            }}
            //The actor choose field displaying space is limited so i should add the TextBox UI.
            //And need to be delete the actor from the list.
            listUI={(actor: actorsMovieDTO) => (
              <>
                {actor.name} /{" "}
                <input
                  placeholder="Character"
                  type="text"
                  value={actor.character}
                  onChange={(e) => {
                    const index = selectedActor.findIndex(
                      (x) => x.id === actor.id
                    );

                    const actors = [...selectedActor];
                    actors[index].character = e.currentTarget.value;
                    setSelectedActor(actors);
                  }}
                />
              </>
            )}
          />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Save
          </Button>
          <Link className="btn btn-secondary" to="/genres">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}
interface movieFormProps {
  model: movieCreationDTO;
  onSubmit(
    values: movieCreationDTO,
    actions: FormikHelpers<movieCreationDTO>
  ): void;
  selectedGenres: genreDTO[];
  nonSelectedGenres: genreDTO[];
  selectedMovieTheaters: movieTheaterDTO[];
  nonSelectedMovieTheater: movieTheaterDTO[];
  selectedActors: actorsMovieDTO[];
}
