import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

import React from 'react'
import ShowNavBar from '@tests/ShowNavBar.jsx'
import NavBarItems from '@features/NavBar/NavBarItems.jsx';

const NavBar = () => 
{
    const [ShowNav, setShowNav] = React.useState(false)
  
    return (
        <>
            <nav className="w-full NavDesk items-center z-10 px-4 fixed top-0 justify-between bg-orange-400 py-4">                
                <NavBarItems />
            </nav>
            <nav className="NavMob z-10 top-0 fixed w-full bg-orange-400 py-4">
                <FontAwesomeIcon icon={faBars} className="text-white text-2xl pl-4" onClick={() => ShowNavBar(ShowNav, setShowNav)}/>  
                
                    <div className="nav-content hidden relative w-full bg-orange-400 animate__animated">
                        <div className="w-full absolute bg-orange-400 text-center">
                            <NavBarItems />
                        </div>
                    </div>
                </nav>
        </>
    );
  
}

export default NavBar;