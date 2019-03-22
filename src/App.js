import React, { Component, Fragment } from 'react';
import { GlobalStyle } from "./style";
import Header from './common/header';
import { GlobalStyleIcon } from "./statics/iconfont/iconfont";




class App extends Component {
  render() {
    return (
        <Fragment>
            <GlobalStyleIcon/>
            <GlobalStyle/>
            <Header/>
        </Fragment>
    );
  }
}

export default App;
