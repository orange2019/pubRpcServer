const jayson = require('jayson')

const jsonParser = require('body-parser').json
const connect = require('connect')
const app = connect()

const methods = require('./app/controller')
// console.log(methods)

const server = jayson.server(methods)

app.use(jsonParser())
app.use(server.middleware())

app.listen(10001, () => {
  console.log('rpc server start at port: ', 10001)
});