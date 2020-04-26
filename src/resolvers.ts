import { ResolversContext, NewMovieInput, CreateMovieResponse } from './types'
import { IResolvers } from 'apollo-server'

const resolvers: IResolvers = {
  Query: {
    movies: (
      _: void,
      __: void,
      { dataSources }: ResolversContext
    ) => dataSources.moviesAPI.getMovies(),
  },
  Mutation: {
    createMovie: (
      _: void,
      { newMovie }: NewMovieInput,
      { dataSources }: ResolversContext
    ): CreateMovieResponse => {
      const movies = dataSources.moviesAPI.createMovie(
        newMovie
      )
      return { movies }
    },
  },
}

export default resolvers