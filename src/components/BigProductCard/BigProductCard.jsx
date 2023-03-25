import React from 'react';
import cls from './BigProductCard.module.scss'
import shirt from '../../assets/shirt.png'
import {StarIcon, HeartIcon} from "@heroicons/react/24/solid";
import {useCartStore} from "../../store/useCartStore.jsx";
export const BigProductCard = () => {
    return (
        <div className={cls.card}>
            <img src={shirt}/>
            <div className={cls.productInfo}>
                <h1>Love Math</h1>
                <div className={cls.stars}>
                    <StarIcon   />
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </div>
                <p className={cls.description}>Convenient Always!</p>
                <p className={cls.price}>Price $150.95</p>
                <div className={cls.colors}>
                    <p className={cls.colorText}>Color</p>
                    <div className={cls.blue}/>
                    <div className={cls.green}/>
                    <div className={cls.red}/>
                    <div className={cls.black}/>
                </div>
                <div className={cls.buttons}>
                    <button className={cls.outlineButton}><HeartIcon/></button>
                    <button className={cls.outlineButton}>Add to cart</button>
                    <button className={cls.solidButton}>Buy now</button>
                </div>
            </div>
        </div>
    );
};