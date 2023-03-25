import React from 'react';
import cls from './SoldProductCard.module.scss'
import shirt from '../../assets/shirt.png'
export const SoldProductCard = () => {
    return (
        <div className={cls.card}>
            <div className={cls.productImage}>
                <img src={shirt}/>
            </div>
            <div className={cls.productInfo}>
                <h1>Math Instruction</h1>
                <p>256 Reviews  1628 orders</p>
            </div>
            <p className={cls.price}>Price $340</p>
        </div>
    );
};