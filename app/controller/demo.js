const Controller = require('./../../lib/controller')

class DemoController extends Controller {
  async func(args, ret) {
    console.log(args.uuid, args)
    ret.data = args
    return ret
  }
}

module.exports = DemoController