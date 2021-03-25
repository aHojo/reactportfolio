import React from 'react';


const Nav = ({setPage}) => {

    return (
        <nav>
        <ul className="flex-row">
          <li className="mx-2" onClick={() => setPage('about')}>
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2" onClick={() => setPage('portfolio')}>
            <span >Portfolio</span>
          </li>
          <li className="mx-2" onClick={() => setPage('contact')}>
            <span >Contact</span>
          </li>
          <li className="mx-2" onClick={() => setPage('resume')}>
            <span >Resume</span>
          </li>
        </ul>
      </nav>
    )
}


export default Nav;