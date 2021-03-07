import React from 'react';

function SideBar({ children }) {
    return (
        <div className="col-12 col-md-4 rounded bg-light">
            {
                children
            }
        </div>
    );
}

export default SideBar;