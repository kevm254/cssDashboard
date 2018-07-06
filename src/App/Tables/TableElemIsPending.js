import React from 'react';

export default (props) => {
    return (
        <tr>
            <th>{props.number}</th>
            <td>{props.name}</td>
            <td>{props.dollar}</td>
            <td>{props.date}</td>
            <td><span className="badge badge-success w-75 py-2">{props.isApproved ? 'Approved' : 'Pending'}</span></td>
        </tr>
    )
}