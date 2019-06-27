// 获取所有方法
const methods = {
  demo: require('./demo')
}

let METHODS = {}
Object.keys(methods).forEach(con => {
  // 加载controller
  console.log('load method controllers:', con)
  let funcs = new methods[con]
  Object.getOwnPropertyNames(Object.getPrototypeOf(funcs)).forEach(func => {
    // 加载方法
    if (func != 'constructor' && func[0] != '_') {
      console.log('load method method:', con + '_' + func)
      METHODS[con + '_' + func] = async (args, callback) => {
        let ret = {
          code: 0,
          message: 'success',
          data: null
        }
        await funcs[func](args, ret)
        console.log(ret)
        callback(null, ret)
      }
    }

  })
})

console.log(METHODS)

module.exports = METHODS