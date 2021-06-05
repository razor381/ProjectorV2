import "./env";
import "./db";

import cors from "cors";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import favicon from "serve-favicon";
import compression from "compression";

import json from './utils/json';
import routes from './routes';
import * as errorHandler from './utils/errorHandler';

const app = express();

const APP_PORT = process.env.APP_PORT || "3000";
const APP_HOST = process.env.APP_HOST || "0.0.0.0";

const API_ROUTE = 'api';

app.set("port", APP_PORT);
app.set("host", APP_HOST);

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

app.use(favicon(path.join(__dirname, "/../public", "favicon.ico")));
app.use(cors());
app.use(helmet());
app.use(compression());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(errorHandler.bodyParser);
app.use(json);

// API Routes
app.use(`/${API_ROUTE}`, routes);

// Error Middlewares

app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`SERVER LISTENING AT: http://${app.get('host')}:${app.get('port')}/${API_ROUTE}`);
});

process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection: ', err);
  process.exit(1);
})

process.on('uncaughtException', (err) => {
  console.error('uncaughtException', err);
  process.exit(1);
});

process.once('SIGNUSR2', () => {
  process.kill(process.id, 'SIGUSR2');
});

// handle user ^C input
process.on('SIGINT', () => {
  process.kill(process.id, 'SIGINT');
});
