import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers'
import typeDefs from './typeDefs'
import dataSources from './dataSources'

const server = new ApolloServer({ typeDefs, resolvers, dataSources })

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at ${url}`)
})
