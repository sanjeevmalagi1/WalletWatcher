import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import imagine from 'assets/img/sidebar-3.jpg';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }
    updateDimensions(){
        this.setState({width:window.innerWidth});
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    renderWallets(wallets){
        console.log(wallets);
        
        return  _.map(wallets,(wallet,key )=>{
            const { address } = wallet
            
            return (
                <li key={key}>
                    <NavLink alt={address} to={`/wallet/${address}`} className="nav-link">
                        <p> { `${address.slice(0,5)}.....${address.slice(-5)}` } </p>
                    </NavLink>
                </li>
            );
        })
    }

    render(){
        const { wallets } = this.props;
        return (
            <div id="sidebar" className="sidebar" data-color="black" data-image={imagine}>
                <div className="sidebar-wrapper">
                    <ul className="nav text-center">
                        <li className="active">
                            <NavLink to={`/wallets`} className="nav-link">
                                <p>Go Back</p>
                            </NavLink>
                        </li>
                        { this.renderWallets(wallets) }     
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        wallets:state.wallets
    };
}
  
export default connect(mapStateToProps,{ })(Sidebar);
  