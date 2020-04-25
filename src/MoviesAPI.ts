import { RESTDataSource } from 'apollo-datasource-rest'
import { NewMovie, Movie } from './types'

export default class MoviesAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:5200/'
  }

  async getMovies(): Promise<Movie[]> {
    return this.get('movies')
  }

  async createMovie(movie: NewMovie): Promise<Movie[]> {
    return this.post('movies', movie)
  }
}
