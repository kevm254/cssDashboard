import React, { Component } from 'react';
import TableElem from './TableElem';
import PageItem from './PageItem';
import TableElemIsPending from './TableElemIsPending';

export default class Tables extends Component {
    state = {
        users: [
            new User(1, 'John', '$2000', '25/05/2018'),
            new User(2, 'Ann', '$2000', '25/05/2018'),
            new User(3, 'Mark', '$2000', '25/05/2018'),
            new User(4, 'Mary', '$2000', '25/05/2018'),
            new User(5, 'Bob', '$2000', '25/05/2018')
        ],
        users2: [
            new User(1, 'Monica', '$2000', '25/05/2018', true),
            new User(2, 'Nick', '$2000', '25/05/2018', true),
            new User(3, 'Alex', '$2000', '25/05/2018', false),
            new User(4, 'Jane', '$2000', '25/05/2018', false),
            new User(5, 'Michael', '$2000', '25/05/2018', true),
            new User(6, 'Kate', '$2000', '25/05/2018', false)
        ]
    };

    render() {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-12 mb-4 mb-xl-0">

                                    <h3 className="text-muted text-center mb-3">Staff Salary</h3>

                                    <table className="table table-striped bg-light text-center">
                                        <thead>
                                            <tr className="text-muted">
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Salary</th>
                                                <th>Date</th>
                                                <th>Contact</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.users.map((user, idx) => <TableElem key={idx} number={user.number} name={user.name} dollar={user.dollar} date={user.date} /> )}
                                        </tbody>
                                    </table>

                                    <nav>
                                        <ul className="pagination justify-content-center">
                                                <PageItem />
                                                <PageItem body="1" isActive={true} />
                                                <PageItem body="2" />
                                                <PageItem body="3" />
                                                <PageItem />
                                        </ul>
                                    </nav>
                                </div>

                                <div className="col-xl-6 col-12">
                                    <h3 className="text-muted text-center mb-3">Recent Payments</h3>
                                    <table className="table table-dark table-hover text-center">
                                        <thead>
                                        <tr className="text-muted">
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.users2.map((user, idx) => <TableElem key={idx} number={user.number} name={user.name} dollar={user.dollar} date={user.date} isApproved={user.isApproved} /> )}
                                        </tbody>
                                    </table>

                                    <nav>
                                        <ul className="pagination justify-content-center">
                                            <PageItem />
                                            <PageItem body="1" isActive={true} />
                                            <PageItem body="2" />
                                            <PageItem body="3" />
                                            <PageItem />
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class User {
    constructor(number = 0, name = 'unknown', dollar = '$0', date = Date.now(), isApproved = false) {
        this.number = number;
        this.name = name;
        this.dollar = dollar;
        this.date = date;
        this.isApproved = isApproved;
    }
}