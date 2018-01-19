import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export class StatsCard extends Component{
    render(){
        return (
            <div className="card card-stats">
                <div className="content">
                    <Row>
                        <Col xs={12}>
                            <div className="icon-big text-center icon-warning">
                                {this.props.bigIcon}
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="text-center">
                                <p className="">{this.props.statsText}</p>
                                {this.props.statsValue}
                                <hr />
                                { this.props.statsIconText }
                            </div>
                        </Col>
                    </Row>
                    
                </div>
            </div>
        );
    }
}

export default StatsCard;
