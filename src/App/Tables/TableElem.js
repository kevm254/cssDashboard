import React from 'react';

export default (props) => {
    return (
        <tr>
            <th>{props.number}</th>
            <td>{props.name}</td>
            <td>{props.dollar}</td>
            <td>{props.date}</td>
            <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
        </tr>
    )
}

