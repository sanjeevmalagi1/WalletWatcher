import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Header from 'components/Header/Header';

import WalletList from '../../views/WalletList/WalletList'

class Console extends Component {
    
    componentDidUpdate(e){
        if(window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
        }
    }
    render() {
        return (

                <div className="wrapper">
                    <div id="main-panel" className="">
                        <Header {...this.props}/>
                            <Switch>
                                <Route path="/wallets" name="Wallets" component={WalletList}/>
                                <Redirect from="/" to="/wallets"/>
                            </Switch>
                    </div>
                </div>
        );
    }
}

export default Console;
