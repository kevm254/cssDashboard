import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <button className="btn btn-block bg-secondary text-light text-left" data-toggle="collapse"
                        data-target={('#collapse' + props.postNum) || ''}>
                    <img src={props.imgSrc || ''} width="50" className="mr-3 rounded"/>
                    {props.userName || ''} posted a new comment
                </button>
            </div>
            <div className="collapse show" id={('collapse' + props.postNum) || ''} data-parent="#accordion">
                <div className="card-body">
                    {props.comment || ''}
                </div>
            </div>
        </div>
    )
};

Comment.propTypes = {
    postNum: PropTypes.string,
    imgSrc: PropTypes.string,
    userName: PropTypes.string,
    comment: PropTypes.string
};

export default Comment;