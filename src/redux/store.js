import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import filterReducer from './slice/filterSlice';
import addToCartReducer from './slice/addTocart'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import productsSlice from './slice/productsSlice';

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    auth: authReducer,
    filter : filterReducer,
    addToCart: addToCartReducer,
    products : productsSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistedStore = persistStore(store);