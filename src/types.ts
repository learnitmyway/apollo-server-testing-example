import MoviesAPI from './MoviesAPI'

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

export interface DataSources {
  moviesAPI: MoviesAPI
}

export interface Context {
  dataSources: DataSources
}
