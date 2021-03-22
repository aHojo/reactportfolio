import React from 'react';


const Nav = () => {

    return (
        <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <span >Portfolio</span>
          </li>
          <li className="mx-2">
            <span >Contact</span>
          </li>
        </ul>
      </nav>
    )
}


export default Nav;