"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));

var _postRoutes = _interopRequireDefault(require("./routes/postRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use('/users', _userRoutes.default);
router.use('/posts', _postRoutes.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=routes.js.map