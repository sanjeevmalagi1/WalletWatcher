import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import swal from 'sweetalert';
import moment from 'moment';
import _ from 'lodash';

import { addWallet } from '../../actions';

import {StatsCard} from 'components/StatsCard/StatsCard.jsx';

class WalletList extends Component {

    constructor(props){
        super(props);
        this.addWallet = this.addWallet.bind(this);
        this.renderWallets = this.renderWallets.bind(this);
    }

    componentDidMount(){
        document.title = `ZPX | Wallet List`;
    }

    addWallet(){
        const { addWallet } = this.props;
        swal({
            text: 'Enter the address Of Wallet',
            content: "input",
            button: {
                text: "Add Wallet",
                closeModal: false
            }
        })
        .then(id => {
            if (!id) throw Error("Wallet Not Found");
            addWallet({
                id,
                addedOn : moment()
            }, success => {
                if(success){
                    swal("Success", "Wallet Added", "success");
                }
                else{
                    swal("Failed", "Wallet not found", "error");
                }
            });

        })
        .catch(e=>{
            swal("Failed", "Wallet not found", "error");
        })
    }

    renderWallets(){
        const { wallets } = this.props;

        return _.map(wallets, (wallet,index)=>{
            return (
                <Col key={index} lg={4} sm={6}>
                    <Link to={`/wallet/${wallet.address}`}>
                        <StatsCard
                            bigIcon={<i className="pe-7s-wallet text-success"></i>}
                            statsText={wallet.address}
                            statsValue={ `BTC ${wallet.total.balance}` }
                            statsIcon={<i className="fa fa-calendar-o"></i>}
                            statsIconText={ `${moment().format('DD MMM YYYY hh:mm a')} (${moment(wallet.addedOn).fromNow()})` }
                            className="wallet"
                        />
                    </Link>
                </Col>
            );
        })
    }

    selectWallet(wallet){
        console.log(wallet);
    }

    render() {

        return (
            <div className="tiles">
                <div className="jumbotron ">
                    <div className="container">
                        <h2>Welcome to wallet watcher!</h2>
                        <p>Add A New Wallet or Select an existing wallet</p>
                    </div>
                </div>
                <Grid fluid className="container">
                    <Row>
                        <Col lg={4} sm={6} >
                            <div className="card card-stats addWallet wallet" onClick={this.addWallet} >
                                <div className="content">
                                    <Row>
                                        <Col>
                                            <div className="icon-big text-center icon-warning">
                                            <i className="fa fa-plus text-warning"></i>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="text-center">
                                                <h3>Add Wallet</h3>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        { this.renderWallets() }

                    </Row>

                </Grid>
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        wallets:state.wallets
    };
  }

  export default connect(mapStateToProps,{ addWallet })(WalletList);
