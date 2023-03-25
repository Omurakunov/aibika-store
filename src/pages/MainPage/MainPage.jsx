import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {ProductCard} from "../../components/ProductCard/ProductCard.jsx";
import {BigProductCard} from "../../components/BigProductCard/BigProductCard.jsx";
import {Navbar} from "../../components/Navbar/Navbar.jsx";
import cls from './MainPage.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { products } from '../../products'
import {A11y, EffectFade} from "swiper";
import {SoldProductCard} from "../../components/SoldProductCard/SoldProductCard.jsx";
export const MainPage = () => {

    return (
        <div className={cls.mainPage}>
            <div className={cls.products}>
                <BigProductCard/>
                <div className={cls.swiperContainer}>
                    <Swiper
                        modules={[A11y, EffectFade]}
                        slidesPerView={3.5}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        className={cls.swiper}
                    >
                        {
                            products?.map((product, index)=>(
                                <SwiperSlide><ProductCard data={product} index={index}/></SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className={cls.overflow}/>
                </div>
            </div>
            <div className={cls.dailyDeals}>
                <h1 className={cls.title}>Daily Deals</h1>
                <SoldProductCard/>
                <SoldProductCard/>
                <SoldProductCard/>
                <SoldProductCard/>
                <SoldProductCard/>
                <SoldProductCard/>
                <SoldProductCard/>
                <SoldProductCard/>
            </div>
        </div>
    );
};

