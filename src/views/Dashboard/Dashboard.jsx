import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RiseLoader } from 'react-spinners';

import _ from 'lodash'
import moment from 'moment';


import {Card} from 'components/Card/Card.jsx';
import {StatsCard} from 'components/StatsCard/StatsCard.jsx';
import { TransactionsTable } from 'components/TransactionsTable/TransactionsTable';

import { addWallet } from '../../actions';

class Dashboard extends Component {

    componentDidMount(){
        document.title = `ZPX | Wallet Transactions`;
    }
    
    render() {
        const { wallet,addWallet } = this.props;
        const { params } = this.props.match;
        
        if(_.isEmpty(wallet)){
            
            addWallet({
                id:params.address,
                addedOn : moment()
            }, success => {
                console.log(success);
                
            });
            return (
                <div className="text-center loader">
                    <RiseLoader size={25} />
                </div>
            );
        }
        
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-wallet text-info"></i>}
                                statsText="Balance"
                                statsValue={`BTC ${wallet.total.balance}`}
                                statsIcon={<i className="fa fa-refresh"></i>}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-angle-up text-danger"></i>}
                                statsText="Spent"
                                statsValue={`BTC ${wallet.total.spent}`}
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-angle-down text-success"></i>}
                                statsText="Recieved"
                                statsValue={`BTC ${wallet.total.received}`}
                                statsIcon={<i className="fa fa-clock-o"></i>}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-shuffle text-info"></i>}
                                statsText="Transactions"
                                statsValue={`${wallet.total.transaction_count}`}
                                statsIcon={<i className="fa fa-refresh"></i>}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Card
                                id="chartHours"
                                title={`Transactions of Wallet (${wallet.address })`}
                                content={ <TransactionsTable transactions={wallet.transactions} /> }
                                
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state,props){
    const { address } = props.match.params;
    return {
        wallet:state.wallets[address]
    };
}
  
export default connect(mapStateToProps,{ addWallet })(Dashboard);
  