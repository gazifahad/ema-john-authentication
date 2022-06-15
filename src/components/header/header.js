import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from '../../images/Logo.svg'
import './header.css'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
const Header = () => {
    const logout = () => {
        signOut(auth);
      };
    const [user] = useAuthState(auth);
    return (
        <div className='body'>
            <nav className='header'>
                <div className='logo'>
                <img src={Logo} alt="" />

                </div>
                <div className='menu'>
                <ul>
                    <Link to={"/home"}> <li>home</li></Link>
                    <Link to={"/orders"}><li>orders</li></Link>
                    <Link to={"/inventory"}> <li>manage inventory</li></Link>
                    <Link to={'/about'}><li>about</li></Link>
                   {
                    user ?  <Link onClick={logout} to={'/'}><li>logout</li></Link> : <Link to={'/login'}><li>login</li></Link>
                   }
                </ul>

                </div>

            </nav>
        </div>
    );
};

export default Header;