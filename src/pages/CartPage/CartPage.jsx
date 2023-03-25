import React, {useContext} from 'react';
import './CartPage.module.scss'
import {Link} from "react-router-dom"
import cls from './CartPage.module.scss'
import {ChevronLeftIcon} from "@heroicons/react/20/solid/index.js";
import {CartProductCard} from "../../components/CartProductCard/CartProductCard.jsx";
import {BankCard} from "../../components/BankCard/BankCard.jsx";
import {useCartStore} from "../../store/useCartStore.jsx";
export const CartPage = () => {
    const {cart} = useCartStore()

    return (
        <div className={cls.cartPage}>
            <div className={cls.products}>
                <div className={cls.homeLink}>
                    <ChevronLeftIcon/>
                    <Link to={'/'}>Shopping Continue</Link>
                </div>
                <h1>Shopping Cart</h1>
                <p>You have 3 items in your cart</p>
                {cart.map((product, index)=>(
                    <CartProductCard data={product}/>
                ))
                }
            </div>
            <BankCard/>
        </div>
    );
};
