import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import TopNav from './TopNav/TopNav';

export default class NavBar extends Component {
    employeeData = [
        {}, {}, {}, {}
    ];

    state = {
        employeeData: this.employeeData
    };

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light">
                <button className="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="myNavbar">
                    <div className="container-fluid">
                        <div className="row">
                            <Sidebar />
                            <TopNav />
                        </div>
                    </div>
                </div>

            </nav>
        )
    }
}