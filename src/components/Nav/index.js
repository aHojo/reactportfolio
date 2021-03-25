import React from 'react';


const Nav = ({page, setPage}) => {

    return (
        <nav>
        <ul className="flex-row">
          <li className={page === 'about' ? "mx-2 navActive" : "mx-2"} 
            onClick={() => setPage('about')}>
            <span>
              About me
            </span>
          </li>
          <li 
            className={page === 'portfolio' ? "mx-2 navActive" : "mx-2"} 
            onClick={() => setPage('portfolio')}>
            <span >Portfolio</span>
          </li>
          <li 
            className={page === 'contact' ? "mx-2 navActive" : "mx-2"} 
            onClick={() => setPage('contact')}>
            <span >Contact</span>
          </li>
          <li 
            className={page === 'resume' ? "mx-2 navActive" : "mx-2"} 
            onClick={() => setPage('resume')}>
            <span >Resume</span>
          </li>
        </ul>
      </nav>
    )
}


export default Nav;