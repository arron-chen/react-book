import { createStore , compose} from 'redux';
import reducer from './reducer';


// 增加react-redux调试工具
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers();

const store = createStore(reducer, enhancer);

export default store;