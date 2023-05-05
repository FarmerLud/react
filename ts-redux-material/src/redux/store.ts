import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken']
}

const store = configureStore({
  reducer: {
    auth: persistReducer<ReturnType<typeof authReducer>>(
      persistAuthConfig,
      authReducer
    )
  },
  middleware: (defaultMiddelware) =>
    defaultMiddelware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

export const persistor = persistStore(store)

export { store }
