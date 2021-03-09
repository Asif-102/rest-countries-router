import React from 'react';

const NotFound = () => {
    const notFoundStyle = {
        textAlign:'center',
        margin:'10px',
        padding:'10px'
    };
    return (
        <div style={notFoundStyle}>
            <h3>Sorry error 404....not found !!!</h3>
        </div>
    );
};

export default NotFound;