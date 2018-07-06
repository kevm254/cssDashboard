import React from 'react';

export default (props) => {
    return (
        <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <h4 className="text-light text-uppercase mb-0">Dashboard</h4>
                </div>

                <div className="col-md-5">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control search-input" placeholder="Search..." />
                            <button type="button" className="btn btn-white search-button">
                                <i className="fas fa-search text-danger" />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col-md-3">
                    <ul className="navbar-nav">
                        <li className="nav-item icon-parent">
                            <a href="#" className="nav-link icon-bullet">
                                <i className="fas fa-comments text-muted fa-lg" />
                            </a>
                        </li>

                        <li className="nav-item icon-parent">
                            <a href="#" className="nav-link icon-bullet">
                                <i className="fas fa-bell text-muted fa-lg" />
                            </a>
                        </li>

                        <li className="nav-item ml-md-auto">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#sign-out">
                                <i className="fas fa-sign-out-alt text-danger fa-lg" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}