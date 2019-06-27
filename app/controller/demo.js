const Controller = require('./../../lib/controller')

class DemoController extends Controller {
  async func(args) {
    console.log(args.uuid, args)
    // cb(null, {
    //   code: 1,
    //   message: 'success',
    //   data: args
    // })
    return {
      code: 1,
      message: 'success',
      data: args
    }
  }
}

module.exports = DemoController