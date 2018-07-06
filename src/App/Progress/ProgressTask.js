import React from 'react';

export default (props) => {
    return (
        <div className="container-fluid bg-white">
            <div className="row py-3 mb-4 task-border align-items-center">
                <div className="col-1">
                    <input type="checkbox" checked />
                </div>

                <div className="col-sm-9 col-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
                <div className="col-1">
                    <a href="#" data-toggle="tooltip" title="<h6>edit</h6>" data-html="true" data-placement="top">
                        <i className="fas fa-edit fa-lg text-success mr-2" />
                    </a>
                </div>

                <div classname="col-1">
                    <a href="#" data-toggle="tooltip" title="<h6>delete</h6>" data-html="true" data-placement="top">
                        <i className="fas fa-trash-alt fa-lg text-danger" />
                    </a>
                </div>

            </div>
        </div>
    )
}