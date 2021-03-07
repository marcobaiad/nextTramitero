import React from 'react';

function Main({ children }) {
    return (
        <div className="col-12 shadow-lg rounded">
            {
                children
            }
        </div>
    );
}

export default Main;