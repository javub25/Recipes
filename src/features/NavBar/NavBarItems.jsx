import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import React from "react";

const NavBarItems = () => 
{
    return (
        <>        
            <FontAwesomeIcon icon={faHome} className="text-white text-2xl"/>
                <h2 className="text-1xl text-white">CATEGORIES</h2>
                <h2 className="text-1xl text-white">AREAS</h2>
                <h2 className="text-1xl text-white">FAVOURITES</h2>
        </>
    )
}

export default NavBarItems;