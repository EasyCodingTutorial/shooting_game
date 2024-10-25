"use client"
import React, { useEffect, useState } from 'react'

import styles from './MainBg.module.css'

export const MainBg = () => {

    const images = [
        '/assets/mainBg1.png',
        '/assets/mainBg2.png',
        '/assets/mainBg3.png',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0)


    // Function To Go To The Next Img
    const nextImg = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    // Function To Go To The Prev Img
    const prevImg = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    // Automatically Change The Img in Every 10 sec
    useEffect(() => {

        const intervalId = setInterval(() => {
            nextImg()
        }, 10000); //10000ms = 10sec

        return () => clearInterval(intervalId)

    }, [])




    return (
        <div className={styles.MainBg}>
            <div className={styles.ImgContainer}>
                <img src={images[currentImageIndex]} alt="" />
                {/* <img src="/assets/mainBg1.png" alt="" /> */}
                <div className={styles.Overlay}></div>
            </div>
            <div className={styles.Content}>
                <h5>Straight Shot Academy</h5>
                <h6>Sharpen Your Aim, Secure Your Shot!</h6>
            </div>

            {/* For Control Buttons */}
            <div className={styles.Buttons}>
                <button onClick={prevImg} className={styles.PrevButton}>⬅</button>
                <button onClick={nextImg} className={styles.NextButton}>➡</button>
            </div>


        </div>
    )
}
