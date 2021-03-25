import React from 'react';
import Nav from '../Nav';


const Header = ({setPage}) => {

    return (

        <header className="flex-row px-1">
            <h1>Andrew</h1>
            <Nav setPage={setPage} />
        </header>
    )
}




export default Header;