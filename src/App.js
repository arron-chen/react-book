import React, { Component } from 'react';
import Header from './common/header';
import GlobalStyleFont from './statics/iconfont/iconfont';
import GlobalStyle from './style';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <React.Fragment>
              <GlobalStyle />
              <GlobalStyleFont />
              <Header/>
            </React.Fragment>
        </Provider>
    );
  }
}

export default App;
