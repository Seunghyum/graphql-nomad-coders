export let movies = [
  {
    id: 1,
    name: 'Nicolas',
    age: 10,
    gender: 'female'
  },
  {
    id: 2,
    name: 'Echo',
    age: 13,
    gender: 'male'
  },
  {
    id: 3,
    name: 'Nico',
    age: 15,
    gender: 'female'
  }
]

export const getMovies = () => movies;

export const getById = id => {
  const filteredPeople = people.filter(person => id === person.id);
  return filteredPeople[0];
}

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if(cleanedMovies.length < movies.length) {
    movies = cleanedMovies;
    return true
  } else {
    return false
  }
}

export const addMoive = (name, score) => {
  const newMovie = {
    id: `${movies.length+1}`,
    name,
    score
  };
  movies.push(newMovie)
  return newMovie
}