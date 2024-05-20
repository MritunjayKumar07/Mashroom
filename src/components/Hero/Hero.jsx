import React from 'react';
import css from './Hero.module.css';
import HeroImg from '../../assets/heroGreen.png';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Hero = () => {
    const transition = {duration: 3, type: "spring"}
    return (
        <div className={css.container}>
            {/* left side */}
            <div className={css.h_sides}>
                <span className={css.text1}>Fresh & Magical Mushrooms for Sale!</span>
                <div className={css.text2}>
                    <span>Mushrooms Collection</span>
                    <span>Delightful Mushroom Collection for Your Culinary Adventures!</span>
                </div>
            </div>
            {/* middle side */}
            <div className={css.wrapper}>
                <motion.div initial={{bottom:"2rem"}} whileInView={{bottom:"0rem"}} transition={transition} className={css.blueCircle}></motion.div>
                <motion.img initial={{bottom:"-2rem"}} whileInView={{bottom:"0rem"}} transition={transition} src={HeroImg} alt='Mashroom_Logo' width={600} />
                <motion.div initial={{right:"6%"}} whileInView={{right:"2%"}} transition={transition} className={css.cart2}>
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>Best Signup Offers</span>
                        <div><BsArrowRight /></div>
                    </div>
                </motion.div>
            </div>
            {/* Right Side */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy customers</span>
                </div>
            </div>
        </div>
    )
}

export default Hero
