export interface Movie {
  id: string
  title: string
}

export interface NewMovie {
  title: string
}

export interface CreateMovieResponse {
  movies: Movie[]
}
