'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value)
            }).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result['default'] = mod
    return result
  }
Object.defineProperty(exports, '__esModule', { value: true })
require('reflect-metadata')
const graphql_import_1 = require('graphql-import')
const apollo_server_express_1 = require('apollo-server-express')
const typeorm_1 = require('typeorm')
const express_1 = __importDefault(require('express'))
const bodyParser = __importStar(require('body-parser'))
const path = __importStar(require('path'))
const routes_1 = __importDefault(require('./routes'))
const resolvers_1 = __importDefault(require('./resolvers'))
const app = express_1.default()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes_1.default)
const typeDefs = graphql_import_1.importSchema(
  path.join(__dirname, 'schema.graphql')
)
const schema = apollo_server_express_1.makeExecutableSchema({
  typeDefs,
  resolvers: resolvers_1.default,
})
const server = new apollo_server_express_1.ApolloServer({ schema })
server.applyMiddleware({ app })
typeorm_1.createConnection().then(() =>
  __awaiter(this, void 0, void 0, function*() {
    app.listen(8080, () => {
      console.log(`🚀  Server ready at localhost:8080${server.graphqlPath}`)
    })
  })
)
//# sourceMappingURL=index.js.map
