import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducer';
import middlewares from './middlewares';

export default process.env.NODE_ENV === 'production' ? createStore(
    reducer,
    compose(applyMiddleware(...middlewares),
    )) :
    createStore(
        reducer,
        compose(applyMiddleware(...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ));