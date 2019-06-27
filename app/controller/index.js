// const demo = require('./demo')

const methods = {
  demo: require('./demo')
  // demo_func: async (args, cb) => {
  //   console.log(args.uuid, args)
  //   cb(null, {
  //     code: 1,
  //     message: 'success',
  //     data: args
  //   })
  // }
}

let METHODS = {}
Object.keys(methods).forEach(con => {
  console.log('load method controllers:', con)
  let funcs = new methods[con]
  Object.getOwnPropertyNames(Object.getPrototypeOf(funcs)).forEach(func => {

    if (func != 'constructor' && func[0] != '_') {
      console.log('load method method:', con + '_' + func)
      METHODS[con + '_' + func] = async (args, callback) => {
        let ret = await funcs[func](args)
        console.log(ret)
        callback(null, ret)
      }
    }

  })
})

console.log(METHODS)

module.exports = METHODS