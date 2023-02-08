import React from 'react';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchForm from './SearchFrom';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <button className='menu-btn'>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className='logo'>
                        <img src="/image/sungkyulLogo.png" alt="logo" className='logo-img' />
                        <h1 className='logo-title'>성공이</h1>
                </div>
            </div>

            <div className='header-center'>
                 <SearchForm/>
             </div>

            <div className='header-right'>
                <span className='user'>
                    <span>로그인</span>
                </span>
            </div>
            
        </div>
    );
};

export default Header;