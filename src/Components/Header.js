import React from 'react';
import { NavLink } from "react-router-dom"
const Header = () => {
    return (
        <div className="header_block">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/employees">Сотрудники</NavLink>
        </div>
    );
}

export default Header;