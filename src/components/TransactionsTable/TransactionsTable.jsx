import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import _ from 'lodash';

import { TransactionRow } from './TransactionRow';

export class TransactionsTable extends Component{

    renderRows(transactions){
        return _.map(transactions, (transaction,key)=>{
            return (
                <TransactionRow key={key} transaction={transaction} />
            );
        })
    }
    
    render(){
        const { transactions } = this.props;
        
        return (
            <Table striped responsive >
                <thead>
                    <tr>
                        <th>Block</th>
                        <th>TxId</th>
                        <th>Transaction Date</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderRows(transactions) }
                </tbody>
            </Table>
        );
    }
}

export default TransactionsTable;
