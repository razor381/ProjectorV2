"use strict";

require("./env");

require("./db");

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _helmet = _interopRequireDefault(require("helmet"));

var _morgan = _interopRequireDefault(require("morgan"));

var _express = _interopRequireDefault(require("express"));

var _serveFavicon = _interopRequireDefault(require("serve-favicon"));

var _compression = _interopRequireDefault(require("compression"));

var _json = _interopRequireDefault(require("./utils/json"));

var _routes = _interopRequireDefault(require("./routes"));

var errorHandler = _interopRequireWildcard(require("./utils/errorHandler"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const APP_PORT = process.env.APP_PORT || "3000";
const APP_HOST = process.env.APP_HOST || "0.0.0.0";
const API_ROUTE = 'api';
app.set("port", APP_PORT);
app.set("host", APP_HOST);
app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;
app.use((0, _serveFavicon.default)(_path.default.join(__dirname, "/../public", "favicon.ico")));
app.use((0, _cors.default)());
app.use((0, _helmet.default)());
app.use((0, _compression.default)());

if (process.env.NODE_ENV === "development") {
  app.use((0, _morgan.default)("dev"));
}

app.use(_express.default.json({
  limit: "10kb"
}));
app.use(_express.default.urlencoded({
  extended: true,
  limit: "10kb"
}));
app.use(errorHandler.bodyParser);
app.use(_json.default); // API Routes

app.use(`/${API_ROUTE}`, _routes.default); // Error Middlewares

app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);
app.listen(app.get('port'), app.get('host'), () => {
  console.log(`SERVER LISTENING AT: http://${app.get('host')}:${app.get('port')}/${API_ROUTE}`);
});
process.on('unhandledRejection', err => {
  console.error('unhandledRejection: ', err);
  process.exit(1);
});
process.on('uncaughtException', err => {
  console.error('uncaughtException', err);
  process.exit(1);
});
process.once('SIGNUSR2', () => {
  process.kill(process.pid, 'SIGUSR2');
});
//# sourceMappingURL=index.js.map