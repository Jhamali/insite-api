import 'reflect-metadata'
import { importSchema } from 'graphql-import'
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import { createConnection } from 'typeorm'
import express from 'express'
import * as bodyParser from 'body-parser'
import * as path from 'path'

import Routes from './routes'
import resolvers from './resolvers'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(Routes)

const typeDefs = importSchema(path.join(__dirname, 'schema.graphql'))
const schema = makeExecutableSchema({ typeDefs, resolvers })
const server = new ApolloServer({ schema })
//apply Express server to Apollo
server.applyMiddleware({ app })

createConnection().then(async () => {
  app.listen(8080, () => {
    console.log(`🚀  Server ready at localhost:8080${server.graphqlPath}`)
  })
})
