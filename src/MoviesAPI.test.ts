import testServer from './testUtils/testServer'
import gql from 'graphql-tag'

import { moviesSample } from './testUtils/moviesSample'
import MoviesAPI from './MoviesAPI'
import { Body } from 'apollo-datasource-rest/dist/RESTDataSource'
import { Movie } from './types'

// We create a fake so we can make the methods public
class MoviesAPIFake extends MoviesAPI {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async get(path: string): Promise<any> {
    return super.get(path)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async post(path: string, body?: Body): Promise<any> {
    return super.post(path, body)
  }
}

describe('MoviesAPI', () => {
  it('fetches all movies', async () => {
    const moviesAPI = new MoviesAPIFake()
    const getStub = (): Promise<Movie[]> => Promise.resolve(moviesSample())
    moviesAPI.get = jest.fn(getStub)

    const { query } = testServer(() => ({ moviesAPI }))

    const GET_MOVIES = gql`
      query GetMovies {
        movies {
          id
          title
        }
      }
    `

    const res = await query({ query: GET_MOVIES })

    // This helps us see the errors if there are any
    expect(res.errors).toBe(undefined)
    expect(moviesAPI.get).toHaveBeenCalledWith('movies')
    expect(res?.data?.movies).toEqual(moviesSample())
  })

  it('creates a movie', async () => {
    const moviesAPI = new MoviesAPIFake()

    const newMovie = {
      title: 'Manos: The Hands of Fate',
    }

    const updatedMovies = [...moviesSample(), { id: 'an id', ...newMovie }]
    moviesAPI.post = jest.fn(() => Promise.resolve(updatedMovies))

    const { mutate } = testServer(() => ({ moviesAPI }))

    const CREATE_MOVIE = gql`
      mutation CreateMovie($newMovie: NewMovie!) {
        createMovie(newMovie: $newMovie) {
          movies {
            id
            title
          }
        }
      }
    `

    const res = await mutate({
      mutation: CREATE_MOVIE,
      variables: { newMovie },
    })

    // This helps us see the errors if there are any
    expect(res.errors).toBe(undefined)
    expect(moviesAPI.post).toHaveBeenCalledWith('movies', newMovie)
    expect(res?.data?.createMovie).toEqual({
      movies: updatedMovies,
    })
  })
})
