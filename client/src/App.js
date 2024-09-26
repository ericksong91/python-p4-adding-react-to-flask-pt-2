import './App.css';
import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';


function App() {
  const get = "/movies/1";
  const [movies, setMovies] = useState([])

  const { data, isLoading, error } = useFetch(get);

  useEffect(() => {
    setMovies([...data]);
  }, [data])

  //   fetching();
  // }, [data]);

  // useEffect(() => {
  //   fetch(get)
  //     .then((r) => r.json())
  //     .then((movies) => console.log(movies))
  // }, [])

  const movieData = movies.map((d) => {
    return <li key={d.id}>{d.title}</li>
  })

  if (isLoading === true) {
    return <div>Loading...</div>
  } 
  
  if(error) {
    return <div>{error}</div>
  }

  return (
    <div className="App">
      <ul>
        {movieData}
      </ul>
    </div>
  );
}

export default App;
