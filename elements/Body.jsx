import React from 'react';

function Body({ children }) {
    return (
        <div className="col-12 col-md-8 shadow-lg rounded">
            {
                children
            }
        </div>
    );
}

export default Body;