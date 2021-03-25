import React from 'react';
import Nav from '../Nav';


const Header = ({page, setPage}) => {

    return (

        <header className="flex-row px-1">
            <h1>Andrew</h1>
            <Nav page={page} setPage={setPage} />
        </header>
    )
}




export default Header;