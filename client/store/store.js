Redux.ReduxStoreDeps = new Tracker.Dependency();

const { applyMiddleware, createStore, ReduxStoreDeps } = Redux;

const rxMiddleware = store => next => action => {
  ReduxStoreDeps.changed();
  return next(action);
};

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, rxMiddleware, logger)(createStore);

Store = createStoreWithMiddleware(rootReducer);

Store.getReactiveState = (reducerKey) => {
  ReduxStoreDeps.depend();
  return Store.getState()[reducerKey];
};
