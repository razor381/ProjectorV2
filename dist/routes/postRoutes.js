"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var postController = _interopRequireWildcard(require("../controllers/posts"));

var postValidator = _interopRequireWildcard(require("../validators/postValidator"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const router = (0, _express.Router)();
/**
 * GET /api/posts.
 */

router.get('/', postController.fetchAll);
/**
 * GET /api/posts/:id.
 */

router.get('/:id', postValidator.findPost, postController.fetchById);
/**
 * POST /api/posts.
 */

router.post('/', postValidator.findPostUser, postValidator.validatePost, postController.create);
/**
 * PUT /api/posts/:id.
 */

router.put('/:id', postValidator.findPost, postValidator.validatePost, postController.update);
/**
 * DELETE /api/posts/:id.
 */

router.delete('/:id', postValidator.findPost, postController.remove);
var _default = router;
exports.default = _default;
//# sourceMappingURL=postRoutes.js.map