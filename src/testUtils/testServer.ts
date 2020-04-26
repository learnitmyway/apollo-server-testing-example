import {
  createTestClient,
  ApolloServerTestClient,
} from 'apollo-server-testing'
import { ApolloServer } from 'apollo-server'
import resolvers from '../resolvers'
import typeDefs from '../typeDefs'

export default function testServer(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSources: any
): ApolloServerTestClient {
  return createTestClient(
    new ApolloServer({ typeDefs, resolvers, dataSources })
  )
}
