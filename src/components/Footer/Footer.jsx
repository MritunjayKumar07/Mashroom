import React from 'react';
import css from './Footer.module.css';
import Logo from "../../assets/logo.png";
import { InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UserIcon, LinkIcon } from "@heroicons/react/outline";

const Footer = () => {
    return (
        <div class={css.footer}>
            <hr />
            <div className={css.heading}>
                <h2><img src={Logo} alt='' />MASHROOM<sup>™</sup></h2>
            </div>
            <div className={css.content}>
                <div className={css.details}>
                    <h4 className={css.address}>Contact Us</h4>
                    <p><LocationMarkerIcon />
                        Lorem ipsum dolor sit amet consectetur <br />
                        adipisicing elit. Cupiditate, qui!
                    </p>
                    <p><PhoneIcon /> <a href="#"> +91-12225*****</a></p>
                    <p><InboxIcon /> <a href="#"> farazc60@gmail.com</a></p>
                </div>
                <div className={css.social}>
                    <h4>Account</h4>
                    <p><LoginIcon /><a href="#">Sign in</a></p>
                    {/* <p><a href="#">Twitter</a></p>
                    <p><a href="#">Github</a></p>
                    <p><a href="#">Facebook</a></p>
                    <p><a href="#">Instagram</a></p> */}
                </div>
                <div className={css.links}>
                    <h4>Company</h4>
                    <p><UserIcon /><a href="#">About us</a></p>
                    {/* <p><a href="#">About</a></p>
                    <p><a href="#">Blogs</a></p>
                    <p><a href="#">Contact</a></p> */}
                </div>
                <div className={css.services}>
                    <h4>Resources</h4>
                    <p><LinkIcon />Safety Privacy & Terms</p>
                    {/* <p><PhoneIcon/>Web development</p>
                    <p><PhoneIcon/>DevOps</p>
                    <p><PhoneIcon/>Web designing</p> */}
                </div>
            </div>
            <footer>
                <hr />
                © 2022 codewithFaraz.
            </footer>
        </div>





    )
}

export default Footer