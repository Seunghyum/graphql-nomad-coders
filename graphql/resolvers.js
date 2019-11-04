import { getById, getMovies, addMoive, deleteMovie } from "./db"

const resolvers = {
  Query: {
    movies:() => getMovies(),
    movie:(_, {id}) => getById(id)
    // person:(_, args) => {
    //   console.log("_ : ", _)
    //   console.log("args : ", args)
    // }
  },
  Mutation: {
    addMovie: (_, {name, score}) => addMoive(name, score),
    deleteMovie: (_, {id}) => deleteMovie(id)
  }
}

export default resolvers