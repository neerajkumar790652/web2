import React from 'react';

function Navbar(props) {
    return (
        <div className='navbar'>
            <div>
                <h2>Logo</h2>
            </div>
            <div>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Order</a>
                <a href="#">Contact</a>
            </div>
            
        </div>
    );
}

export default Navbar;