import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter as Router} from 'react-router-dom'
import reducer from './reducer/reducer'
import rootSaga from './sagas'
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <App />
            </div>
        </Router>
    </Provider>, document.getElementById('root'));
// registerServiceWorker();
