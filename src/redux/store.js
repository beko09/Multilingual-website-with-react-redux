import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: "Languages",
    storage: storage,
    whitelist: ["Languages"] 
};
const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const store = createStore(
    pReducer,
    applyMiddleware(...middleware)
);
const persister = persistStore(store);
export { persister, store };
