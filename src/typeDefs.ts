import { gql } from 'apollo-server'

const typeDefs = gql`
  type Movie {
    id: String
    title: String
  }

  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
  }

  input NewMovie {
    title: String!
  }

  type NewMovieResponse {
    movies: [Movie]!
  }

  type Mutation {
    createMovie(newMovie: NewMovie!): NewMovieResponse!
  }
`

export default typeDefs
