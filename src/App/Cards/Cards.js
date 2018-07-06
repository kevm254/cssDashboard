import React, {Component} from 'react';

export default class Cards extends Component {
    render() {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                            <div className="row pt-md-5 mt-md-3 mb-5">

                                <div className="col-xl-3 col-sm-6 p-2">
                                    <div className="card card-common">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <i className="fas fa-shopping-cart fa-3x text-warning" />
                                                <div className="text-right text-secondary">
                                                    <h5>Sales</h5>
                                                    <h3>$135,000</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer text-secondary">
                                            <i className="fas fa-sync mr-3" />
                                            <span>Updated Now</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-sm-6 p-2">
                                    <div className="card card-common">
                                        <div className="card-body">
                                             <div className="d-flex justify-content-between">
                                                 <i className="fas fa-money-bill-alt fa-3x text-success" />
                                                 <div className="text-right text-secondary">
                                                     <h5>Expenses</h5>
                                                     <h3>$39,000</h3>
                                                 </div>
                                             </div>
                                        </div>
                                    <div className="card-footer text-secondary">
                                        <i className="fas fa-sync mr-3">
                                            <span>Updated Now</span>
                                        </i>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-sm-6 p-2">
                                    <div className="card card-common">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <i className="fas fa-users fa-3x text-info" />
                                                <div className="text-right text-secondary">
                                                    <h5>Users</h5>
                                                    <h3>15,000</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer text-secondary">
                                            <i className="fas fa-sync mr-3" />
                                            <span>Updated Now</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-sm-6 p-2">
                                    <div className="card card-common">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <i className="fas fa-chart-line fa-3x text-danger" />
                                                <div className="text-right text-secondary">
                                                    <h5>Visitors</h5>
                                                    <h3>45,000</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer text-secondary">
                                            <i className="fas fa-sync mr-3" />
                                            <span>Updated Now</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}