import React from 'react';
import cls from './ProductCard.module.scss'
import { StarIcon } from '@heroicons/react/24/outline'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import {useCartStore} from "../../store/useCartStore.jsx";
import shirt from '../../assets/shirt.png'
export const ProductCard = ({data, index}) => {
    const {addProduct, cart} = useCartStore()
    const handleClick = () =>{
        cart.includes(data) === false && addProduct(data)
    }
    return (
        <div className={cls.productCard} key={index}>
            <div className={cls.productCardImage}>
                <img src={shirt}/>
            </div>
            <div className={cls.productCardInfo}>
                <div className={cls.productCardTitle}>
                    <h2>{data.title}</h2>
                </div>
                <div className={cls.productCardAdditional}>
                    <p>Price {data.price}$</p>
                </div>
                <div className={cls.rateWithButton}>
                    <div className={cls.textWithIcon}>
                        <StarIcon className={cls.icon}/>
                        <span>{data.rate}</span>
                    </div>
                    <button onClick={handleClick} className={cls.addToCartButton}><PlusCircleIcon className={cls.saveIcon}/></button>
                </div>
            </div>

        </div>
    );
};