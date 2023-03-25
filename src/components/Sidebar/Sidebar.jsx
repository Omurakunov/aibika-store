import React from 'react';
import cls from './Sidebar.module.scss'
import {Link, NavLink} from "react-router-dom";
import logo from '../../assets/Logo.png'
import { HomeIcon, HeartIcon, ShoppingCartIcon, UserIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
export const Sidebar = () => {
    return (
        <div className={cls.sidebar}>
            <Link to='/' className={cls.logo}>
                <img src={logo}/>
                <h1>MathModes</h1>
            </Link>
            <div className={cls.links}>
                <NavLink to='/' className={({ isActive }) => isActive ? cls.active : cls.link}><HomeIcon className={cls.icon}/><p>Home</p></NavLink>
                <NavLink to='/saved' className={({ isActive }) => isActive ? cls.active : cls.link}><HeartIcon className={cls.icon}/><p>Saved</p></NavLink>
                <NavLink to='/cart' className={({ isActive }) => isActive ? cls.active : cls.link}><ShoppingCartIcon className={cls.icon}/><p>Cart</p></NavLink>
                <NavLink to='/profile' className={({ isActive }) => isActive ? cls.active : cls.link}><UserIcon className={cls.icon}/><p>Profile</p></NavLink>
                <NavLink to='/contacts' className={({ isActive }) => isActive ? cls.active : cls.link}><ChatBubbleLeftIcon className={cls.icon}/><p>Contact Us</p></NavLink>
            </div>
        </div>
    );
};