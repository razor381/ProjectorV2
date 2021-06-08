"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var userController = _interopRequireWildcard(require("../controllers/users"));

var _userValidator = require("../validators/userValidator");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const router = (0, _express.Router)();
/**
 * GET /api/users.
 */

router.get('/', userController.fetchAll);
/**
 * GET /api/users/:id.
 */

router.get('/:id', _userValidator.findUser, userController.fetchById);
/**
 * POST /api/users.
 */

router.post('/', _userValidator.validateUser, userController.create);
/**
 * PUT /api/users/:id.
 */

router.put('/:id', _userValidator.findUser, _userValidator.validateUser, userController.update);
/**
 * DELETE /api/users/:id.
 */

router.delete('/:id', _userValidator.findUser, userController.remove);
var _default = router;
exports.default = _default;
//# sourceMappingURL=userRoutes.js.map