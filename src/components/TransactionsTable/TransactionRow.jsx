import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';

export class TransactionRow extends Component{

    constructor(props){
        super(props)
        this.state = {
            last3 : true
        }
    }

    renderOutputs(outputs){

        if(this.state.last3){
            outputs = outputs.slice(0,3);
        }
        return _.map(outputs, (op,key)=>{
            return (
                <div key={key} className="clearfix">
                    <Link to={`/wallet/${op.addresses[0]}`}>{ op.addresses[0] }</Link>
                    <span className="pull-right">{`BTC ${op.value}`}</span>
                </div>
            );
        })
    }

    toggleLast3(){
        this.setState({
            last3:!this.state.last3
        });
    }

    
    render(){
        const { transaction } = this.props;
        const time = `${moment.unix(transaction.time).format('DD MMM YYYY hh:mm a')} (${moment.unix(transaction.time).fromNow()})`
        
        return (
            <tr>
                <td>{transaction.block}</td>
                <td alt={transaction.txid} >{ `${transaction.txid.slice(0,5)}.....${transaction.txid.slice(-5)}` }</td>
                <td>{time}</td>
                <td>
                    <button onClick={ ()=>{ this.toggleLast3() } } className="btn btn-sm">Expand / Collapse</button>
                    { this.renderOutputs(transaction.outputs) }
                </td>
            </tr>
        );
    }
}

export default TransactionRow;
