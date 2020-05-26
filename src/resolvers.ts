import {
  Context,
  NewMovieInput,
  CreateMovieResponse,
  Movie,
} from './types'
import { IResolvers } from 'apollo-server'

const resolvers: IResolvers = {
  Query: {
    movies: (
      _: void,
      __: void,
      { dataSources }: Context
    ): Promise<Movie[]> =>
      dataSources.moviesAPI.getMovies(),
  },
  Mutation: {
    createMovie: (
      _: void,
      { newMovie }: NewMovieInput,
      { dataSources }: Context
    ): CreateMovieResponse => {
      const movies = dataSources.moviesAPI.createMovie(
        newMovie
      )
      return { movies }
    },
  },
}

export default resolvers
