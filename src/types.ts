import MoviesAPI from "./MoviesAPI";

export interface Movie {
  id: string
  title: string
}

export interface NewMovie {
  title: string
}

export interface NewMovieInput {
  newMovie: NewMovie
}

export interface CreateMovieResponse {
  movies: Promise<Movie[]>
}

export interface GraphQLCustomDataSources {
  moviesAPI: MoviesAPI;
}

export interface GraphQLCustomContext {
  credentials: null;
}

export interface ResolversContext extends GraphQLCustomContext {
  dataSources: GraphQLCustomDataSources;
}
