import { Movie, CreateMovieResponse, NewMovie } from './types'

const resolvers = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    movies: (
      _: void,
      __: void,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      { dataSources }: { dataSources: any }
    ): Movie[] => dataSources.moviesAPI.getMovies(),
  },
  Mutation: {
    createMovie: (
      _: void,
      { newMovie }: { newMovie: NewMovie },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      { dataSources }: { dataSources: any }
    ): CreateMovieResponse => {
      const movies = dataSources.moviesAPI.createMovie(newMovie)
      return {
        movies,
      }
    },
  },
}

export default resolvers
