/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createTestClient,
  ApolloServerTestClient,
} from 'apollo-server-testing'
import { ApolloServer } from 'apollo-server'
import resolvers from '../resolvers'
import typeDefs from '../typeDefs'

export default function testServer(
  dataSources: any
): ApolloServerTestClient {
  return createTestClient(
    new ApolloServer({ typeDefs, resolvers, dataSources })
  )
}
