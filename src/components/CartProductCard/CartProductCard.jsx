import React, {useContext} from 'react';
import cls from './CartProductCard.module.scss'
import shirt from '../../assets/shirt.png'
import {ChevronUpIcon, ChevronDownIcon} from "@heroicons/react/24/solid/index.js";
import { TrashIcon} from "@heroicons/react/24/outline/index.js";
import {useCartStore} from "../../store/useCartStore.jsx";

export const CartProductCard = ({data}) => {
    const {increaseCount, decreaseCount, cart} = useCartStore()

    const countIncrease = () =>{
        let index = cart.indexOf(data)
        increaseCount(index)
    }
    const countDecrease = () =>{
        let index = cart.indexOf(data)
        decreaseCount(index)
    }

    return (
        <div className={cls.card}>
            <div className={cls.productInfo}>
                <img src={shirt}/>
                <h1>{data.title}</h1>
            </div>
            <div className={cls.productInfo}>
                <div className={cls.count}>
                    <p>{data.count}</p>
                    <div className={cls.buttons}>
                        <button onClick={countIncrease}><ChevronUpIcon/></button>
                        <button onClick={countDecrease}><ChevronDownIcon/></button>
                    </div>
                </div>
                <p className={cls.price}>{data?.price}</p>
                <button className={cls.delete}><TrashIcon/></button>
            </div>
        </div>
    );
};