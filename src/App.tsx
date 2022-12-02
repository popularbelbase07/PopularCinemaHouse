import React from 'react';
import IndividualMovie from './movies/IndividualMovie';
import { movieDTO } from './movies/Movies.Model';

function App() {
const testMovie: movieDTO = {
  id: 1,
  title: 'Spider-Man: Far from Home',
  poster: "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg"
}

  return (
    <div className="App">
      <h1>Popular Cinema House</h1>
      <IndividualMovie {...testMovie}/>
    </div>
  );
}

export default App;
