import React, { Component } from 'react'

export default class Chart extends Component {


    componentDidMount() {

    }
    render() {
        return (
            <div className="container">
                <div className="overviewTitle">OVERVIEW</div>
                <div className="overview clearfix">
                    <div className="total">
                        <div className="total-title">
                        營收
                </div>
                        <div className="total-number">
                        <i className="fas fa-dollar-sign"></i>
                            54,540
                </div>
                    </div>
                    <div className="total">
                        <div className="total-title">
                       
                           訂單量
                </div>
                        <div className="total-number">
                        <i className="fas fa-dollar-sign"></i>
                            54,540
                </div>
                    </div>
                    <div className="total">
                        <div className="total-title">
                            淨利
                </div>
                        <div className="total-number">
                        <i className="fas fa-dollar-sign"></i>
                            54,540
                </div>
                    </div>
                </div>
                <div className="activity">
                    <div id="chart"></div>

                </div>
                {/* <div className="orderList clearfix">
                    <h2>Latest Orders</h2>

                    <div className="orderList-item clearfix">
                        <div className="order-img">
                            <img src="#" alt="" />
                        </div>
                        <div className="orderList-item-detail">
                            <div className="orderList-item orderList-item-title">
                                Vintage T-shirt
                    </div>
                            <div className="orderList-item orderList-item-time">
                                2018/6/13 13:42
                    </div>
                            <div className="orderList-item orderList-item-name">
                                belle Willis
                    </div>
                        </div>
                        <div className="orderList-price">
                            <div className="orderList-price-item">
                                <p>Total </p><span>3200</span>
                            </div>
                        </div>

                    </div>

                </div> */}
            </div>
        )
    }
}
