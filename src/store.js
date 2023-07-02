import {createLogger} from 'redux-logger';
import  CreateSagaMiddleware from 'redux-saga';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from "../src/app/services/reducers/index";
import RootSaga from './app/services/saga/root.saga';




const loggerMiddleware = createLogger();
const SagaMiddleware = CreateSagaMiddleware();
export const store = createStore(
    rootReducer,
    applyMiddleware(
       SagaMiddleware,
       loggerMiddleware, 
    )
)

SagaMiddleware.run(RootSaga);