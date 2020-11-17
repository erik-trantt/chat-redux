import { applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

const middlewares = applyMiddleware(logger, reduxPromise);

export default middlewares;
