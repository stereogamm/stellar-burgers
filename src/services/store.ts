import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import ingredientsReducer from './slices/IngredientsSlice';
import burgerConstructor from './slices/BurgerConstructorSlice';
import userState from './slices/UserInfoSlice';
import feedData from './slices/FeedDataSlice';
import userOrdersHistory from './slices/UserOrdersHistory';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerconstructor: burgerConstructor,
  userstate: userState,
  feeddata: feedData,
  ordershistory: userOrdersHistory
}); // Заменить на импорт настоящего редьюсера inPROGRESS

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
