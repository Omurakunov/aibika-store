import React, {useEffect, useState} from 'react';
import profile from "../../assets/pexels-sound-on-3760847.png";
import master from "../../assets/masterCard.svg";
import visa from "../../assets/visa.png";
import bank from "../../assets/bank.png";
import cls from './BankCard.module.scss'
import {useCartStore} from "../../store/useCartStore.jsx";
export const BankCard = () => {
    const {cart} = useCartStore()
    const [sum, setSum] = useState(0)

    const calculateSum = () =>{
        let totalPrice = 0
        cart.map(product=>{
            let price = product.count * product.price
            totalPrice = totalPrice + price
        })
        setSum(totalPrice)
    }
    useEffect(()=>{
        calculateSum()
    },[cart])

    return (
        <div className={cls.paymentCard}>
            <div className={cls.cardInfo}>
                <h1>Card Details</h1>
                <img src={profile}/>
            </div>
            <h2>Card Types</h2>
            <div className={cls.cardTypes}>
                <div><img src={master}/></div>
                <div><img src={visa}/></div>
                <div><img src={bank}/></div>
                <div>See all</div>
            </div>
                <form className={cls.form}>
                    <label>Name on car </label>
                    <input/>

                    <label>Card number</label>
                    <input/>
                    <div className={cls.cardDetails}>
                        <div>
                            <label>Expiration Date</label>
                            <input/>
                        </div>
                        <div>
                            <label>CVV</label>
                            <input/>
                        </div>
                    </div>
                    <p className={cls.price}>{
                        sum
                    }$</p>
                    <button className={cls.button}>Purchase</button>
                </form>

            </div>
    );
};
