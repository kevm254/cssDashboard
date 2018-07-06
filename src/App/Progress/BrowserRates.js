import React from 'react';
import PropTypes from 'prop-types';

const BrowserRates = (props) => {
    return (
        <div>
            <h6 className="mb-3">
                {props.browser || ''}
            </h6>

            <div className="progress mb-4" style={{height: '20px' }}>
                <div className="progress-bar progress-bar-striped font-weight-bold" style={{ width: props.percentage || '0%' }}>
                    {props.percentage || '0%'}
                </div>
            </div>
        </div>
    )
}

BrowserRates.propTypes = {
    browser: PropTypes.string,
    percentage: PropTypes.string
};

export default BrowserRates;