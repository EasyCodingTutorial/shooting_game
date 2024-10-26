import React from 'react'

import styles from './OurBlogs.module.css'

interface BoxProps {
    ImgUrl: string,
    ImgAlt?: string,
    BlogTitle: string,
    blogDesc: string,
}

export const Box = (
    {
        ImgUrl,
        ImgAlt,
        BlogTitle,
        blogDesc
    }: BoxProps
) => {
    return (
        <div className={styles.Box}>
            <img src={ImgUrl} alt={ImgAlt} />
            <div className={styles.BoxContent}>
                <h5>{BlogTitle}</h5>
                <p>
                    {blogDesc}
                </p>
            </div>
        </div>
    )
}
