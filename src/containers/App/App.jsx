import React, { Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';


import Dashboard from '../../views/Dashboard/Dashboard'

class App extends Component {
    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount(){
        
    }
    componentDidUpdate(e){
        if(window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
        }
    }
    render() {
        console.log("das");
        
        return (

                <div className="wrapper">
                    <Sidebar {...this.props} />
                    <div id="main-panel" className="main-panel">
                        <Header {...this.props}/>
                            <Switch>
                                <Route path="/wallet/:address" name="Wallet Info" component={Dashboard}/>
                            </Switch>
                    </div>
                </div>
        );
    }
}

export default App;
