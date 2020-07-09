import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>
                Todo List from Feature branch
            </h1>
            <Link style={{color:'#fff'}} to='/'>Home</Link> |
            <Link style={{color:'#fff'}} to='/About'>About</Link>
        </header>
        
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
}

export default Header;