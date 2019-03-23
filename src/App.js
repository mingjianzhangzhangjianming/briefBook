import React, {Component, Fragment} from 'react';
import {GlobalStyle} from "./style";
import Header from './common/header';
import {GlobalStyleIcon} from "./statics/iconfont/iconfont";

import store from './store';

import {Provider} from 'react-redux';


class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyleIcon/>
                <GlobalStyle/>
                <Provider store = { store }>
                    <Header/>
                </Provider>
            </Fragment>
        );
    }
}

export default App;
