import React from 'react'
import styles from '../styles/Nav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import logo from '../public/Images/EarthieLogo.png'
import { useEffect, useState } from 'react';
import Router, { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';




function Navbar({ notify }) {
    const router = useRouter();
    const showSignup = router.pathname === "/login" ? false : true;
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
            let name = (jwt_decode(token)).name;
            setUser(name);
        }
    },)

    function truncateString(str) {

        if (str.length <= 1) {
            return str;
        } else {
            return str.substring(0, 1);
        }
    }

    function signOut() {
        localStorage.clear()
        setLoggedIn(false);
        notify(toast.success("Logged Out Successfully"))
        Router.push("/")
    }
    return (
        <>

            <div className={styles.mainnav + " px-2 py-2 mt-3 d-flex justify-content-between align-items-center"}>
                <Link href={'/'}>
                    <Image src={logo} alt="Earthie Logo" />
                </Link>

                <div className={styles.linkscontainer + " d-flex"}>
                    <Link href={'/'} className={styles.navlinks + " mx-2"}>Home</Link>
                    <Link href={'/collections'} className={styles.navlinks + " mx-2"}>Collections</Link>
                    <Link href={'/offers'} className={styles.navlinks + " mx-2"}>Offers</Link>
                    <Link href={'/new-arrivals'} className={styles.navlinks + " mx-2"}>New Arrivals</Link>
                    {loggedIn &&
                        <p onClick={signOut} className={styles.navlinks + " mx-2 d-flex mb-0"}>Sign Out</p>
                    }
                </div>
                <div className={styles.rightContainer + " d-flex align-items-center"}>

                    <Link className={styles.righticons + ' mx-2 mt-0 text-white d-flex align-items-center'} href={'/search'} ><Icon icon="eva:search-outline" /> </Link>
                    <Link className={styles.righticons + ' mx-2 mt-0 text-white d-flex align-items-center'} href={'/wishlist'} ><Icon icon="ph:heart" /> </Link>
                    <Link className={styles.righticons + ' mx-2 mt-0 text-white d-flex align-items-center'} href={'/cart'} ><Icon icon="ant-design:shopping-cart-outlined" /> </Link>

                    {loggedIn ?

                        <div className={styles.initials + " d-flex align-items-center justify-content-center"}>
                            {truncateString(user)}
                        </div>
                        :


                        <div className={styles.loginWrapper + " d-flex align-items-center justify-content-center p-2 px-3"}>
                            {showSignup ?
                                <Link href={'/login'} className={styles.loginBtn + " "}>Login</Link>
                                :
                                <Link href={'/signup'} className={styles.loginBtn + " "}>Signup</Link>
                            }
                        </div>
                    }

                </div>

                <div className={styles.rightPhone + " "}>
                    <Link href={'/search'} className={styles.searchPhone + " mx-1 d-flex"}><Icon icon="eva:search-outline" /></Link>
                    <p className={styles.menuBtn + " mb-0 mx-2 d-flex"} onClick={(() => {
                        let menu = document.getElementById('phoneDrawer');
                        if (menu.style.bottom == '-100%') {
                            menu.style.bottom = '0%'
                        }
                        else {
                            menu.style.bottom = '-100%'
                        }
                    })}><Icon icon="gg:menu-right" /></p>
                </div>

            </div>
            <div className={styles.phoneDrawer + " d-flex flex-column justify-content-start"} id="phoneDrawer">
                <Link href={'/'} className={styles.phoneLinks + " d-flex align-items-center m-2 p-3"}><Icon className="mx-2" icon="bx:home-alt-2" /> Home</Link>
                <Link href={'/collections'} className={styles.phoneLinks + " d-flex align-items-center m-2 p-3"} ><Icon className="mx-2" icon="heroicons-outline:fire" /> Collections</Link>
                <Link href={'/offers'} className={styles.phoneLinks + " d-flex align-items-center m-2 p-3"}><Icon className="mx-2" icon="mingcute:t-shirt-line" /> Offers</Link>
                <Link href={'/new-arrivals'} className={styles.phoneLinks + " d-flex align-items-center m-2 p-3"}  ><Icon className="mx-2" icon="ant-design:bell-outlined" /> New Arrivals</Link>
                <Link href={'/login'} className={styles.phoneLinks + " d-flex align-items-center m-2 p-3"} ><Icon className="mx-2 text-danger" icon="heroicons-outline:logout" /> Signout</Link>
            </div>

        </>
    )
}

export default Navbar