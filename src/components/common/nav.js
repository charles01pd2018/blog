import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Avatar} from 'antd';

import navLinks from './objects/navLinks'


export default function NavBar() {
    const [menuActive, setMenuActive] = useState(false);
    
    return (
        <nav className='navigation'>
            <div className='menu-title'>
                <span className='menu-title-logo'>
                    <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' size={38}/>
                </span>
                <span className='menu-title-text'>Yoosh | Blockchain and Cryptocurrency Hub</span>
            </div>

            <div className={`menu-content ${menuActive && 'active'}`}>
                <ul>
                    { navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}   
                </ul>
            </div>
            <i className='ionicons icon ion-ios-menu' onClick={() => setMenuActive(!menuActive)} />
        </nav>
    )
}