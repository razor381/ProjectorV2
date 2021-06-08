"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = _interopRequireDefault(require("../db"));

var _user = _interopRequireDefault(require("./user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TABLE_NAME = 'posts';
/**
 * User Model.
 */

class Post extends _db.default.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }
  /**
   * Table has timestamps.
   */


  get hasTimeStamps() {
    return true;
  }
  /**
   *
   * @returns
   */


  user() {
    return this.belongsTo(_user.default, 'user_id');
  }

}

var _default = Post;
exports.default = _default;
//# sourceMappingURL=post.js.map