import React, { Component } from 'react';
import Header from './common/header';
import GlobalStyleFont from './statics/iconfont/iconfont';
import GlobalStyle from './style';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <GlobalStyle />
          <GlobalStyleFont />
          <Header/>
        </React.Fragment>
    );
  }
}

export default App;
