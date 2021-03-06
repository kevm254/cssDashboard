import React from 'react';

const PageItem = props => {
    let liClasses = props.isActive ? 'page-item active' : 'page-item';

    return (
        <li className={liClasses}>
            <a href="#" className="page-link py-2 px-3">
                {props.body ? props.body : <span>&raquo;</span> }
            </a>
        </li>
    )
};



export default PageItem;