"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = _interopRequireDefault(require("../db"));

var _post = _interopRequireDefault(require("./post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TABLE_NAME = 'users';
/**
 * User Model.
 */

class User extends _db.default.Model {
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
   */


  posts() {
    return this.hasMany(_post.default);
  }

}

var _default = User;
exports.default = _default;
//# sourceMappingURL=user.js.map