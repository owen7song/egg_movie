const Dao = require('../core/BaseDao');
class User extends Dao {
  async getUserInfo() {
    return 555;
  }
}
module.exports = User;
