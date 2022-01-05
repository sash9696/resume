import React from 'react';
import './NavOptions.css';

function NavOptions({title, onClick}) {
    return (
        <div className='navOptions'>
            <button onClick={onClick}>{title}</button>
            
        </div>
    )
}

export default NavOptions;
