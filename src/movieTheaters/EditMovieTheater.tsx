import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
  return (
    <>
      <h3>Edit Movie Theater</h3>
      <MovieTheaterForm
        model={{
          name: " Supa Deurali ",
          latitude: 27.705544572012805,
          longitude: 85.31700611109046,
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
