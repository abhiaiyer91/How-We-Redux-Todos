const { applyMiddleware, createStore } = Redux;

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore);

Store = createStoreWithMiddleware(rootReducer);
