import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware } from 'redux';
import compose from 'lodash/fp/compose';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-undef
const store = process.env.NODE_ENV === 'production' ? createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware),
    )) :
    createStore(
        reducer,
        compose(applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        ));

sagaMiddleware.run(rootSaga);

export default store;