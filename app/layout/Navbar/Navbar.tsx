"use client"
import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'

// For React Icons
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineCloseFullscreen } from "react-icons/md";


interface props {
    LinkText: string,
    LinkTo: string,
}

const NavLinks: props[] = [
    {
        LinkText: 'Home',
        LinkTo: '',
    },
    {
        LinkText: 'About',
        LinkTo: '',
    },
    {
        LinkText: 'Shooting',
        LinkTo: '',
    },
    {
        LinkText: 'Classes',
        LinkTo: '',
    },
]


export const Navbar = () => {


    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleSlider = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={styles.Navbar}>

            <div>
                <img src="/assets/logo.png" alt="" />
            </div>


            <div className={styles.navLinks}>
                {
                    NavLinks.map((I) => (
                        <div key={I.LinkTo}>
                            <Link href={I.LinkTo}>{I.LinkText}</Link>
                        </div>
                    ))
                }
            </div>



            <div className={styles.navLinks}>
                <Link href={''}>Login</Link>
                <Link href={''}>Blogs</Link>
            </div>

            <FaBarsStaggered
                onClick={toggleSlider}
                className={styles.MenuIcon}
            />


            <div className={`${styles.Slider} ${isOpen ? styles.Open : ''}`}>
                <div className={styles.SliderContent}>

                    <MdOutlineCloseFullscreen
                        onClick={toggleSlider}
                        className={styles.CloseIcon}
                    />

                    <img src="/assets/logo.png" alt="" />
                    {
                        NavLinks.map((I) => (
                            <div key={I.LinkTo} className={styles.normalText}>
                                <Link href={I.LinkTo}>{I.LinkText}</Link>
                            </div>
                        ))
                    }
                    <Link href={''} className={styles.normalText}>Login</Link>
                    <Link href={''} className={styles.normalText}>Blogs</Link>



                </div>
            </div>



        </nav>
    )
}
