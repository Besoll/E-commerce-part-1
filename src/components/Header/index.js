import React from 'react';
import './styles.scss';
import Logo from './../../assets/logo-icon-small.jpg';

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="Canvas24 LOGO" />
                </div>
            </div>
        </header>
    );
};

export default Header;