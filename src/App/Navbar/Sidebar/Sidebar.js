import React from 'react';

export default function Sidebar(props) {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
            <a href="#" className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">CodeAndCreate</a>
            <div className="bottom-border pb-3">
                <img src="images/admin.jpeg" width="50" className="rounded-circle mr-3" />
                <a href="#" className="text-white">Helen Smith</a>
            </div>

            <ul className="navbar-nav flex-column mt-4">
                <li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 current"><i className="fas fa-home text-light fa-lg mr-3"></i>Dashboard</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-user text-light fa-lg mr-3"></i>Profile</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-envelope text-light fa-lg mr-3"></i>Inbox</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-shopping-cart text-light fa-lg mr-3"></i>Sales</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-chart-line text-light fa-lg mr-3"></i>Analytics</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-chart-bar text-light fa-lg mr-3"></i>Charts</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-table text-light fa-lg mr-3"></i>Tables</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-wrench text-light fa-lg mr-3"></i>Settings</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-file-alt text-light fa-lg mr-3"></i>Documentation</a></li>

            </ul>
        </div>
    )
}