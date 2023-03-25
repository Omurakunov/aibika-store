import React from 'react';
import cls from './Navbar.module.scss'
import {MagnifyingGlassIcon, AdjustmentsHorizontalIcon, EnvelopeIcon, BellAlertIcon} from "@heroicons/react/24/outline";

export const Navbar = () => {
    return (
        <div className={cls.navbar}>
            <div className={cls.inputBar}>
                <MagnifyingGlassIcon className={cls.searchIcon}/>
                <input placeholder='Search Product'/>
                <AdjustmentsHorizontalIcon className={cls.filterIcon}/>
            </div>
            <div className={cls.navbarLink}>
                <EnvelopeIcon className={cls.icon}/>
            </div>
            <div className={cls.navbarLink}>
                <BellAlertIcon className={cls.icon}/>
            </div>
            <div className={cls.profileImage}/>
        </div>
    );
};