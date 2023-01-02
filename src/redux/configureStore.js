import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './home/Home';

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    countries: countriesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
