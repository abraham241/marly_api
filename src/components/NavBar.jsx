import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <nav>
            <ul>
                <li><Link to="/">Liste</Link></li>
                <li><Link to="/Formulaire">Formulaire</Link></li>
                <li><Link to="/Page_ajout">Page_ajout</Link></li>
                {/* <li><Link to="/Form">Form</Link></li> */}
            </ul>
        </nav>
    )
}