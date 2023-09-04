import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import React from "react";
import {Link} from 'react-router-dom';

const NavBarItems = () => 
{
    return (
        <>
            <ul className="nav-content-list w-full justify-between items-center">
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} className="text-white text-2xl"/>
                    </Link>
                </li>
                <li>
                    <Link to="/categories">
                        <h2 className="text-1xl text-white">CATEGORIES</h2>
                    </Link>
                </li>
                <li>
                    <Link to="/areas">
                        <h2 className="text-1xl text-white">AREAS</h2>
                    </Link>
                </li>
                <li>
                    <Link to="/favourites">
                        <h2 className="text-1xl text-white">FAVOURITES</h2>   
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default NavBarItems;