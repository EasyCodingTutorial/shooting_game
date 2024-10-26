import React from 'react'

import styles from './OurBlogs.module.css'

interface BoxProps {
    ImgUrl: string,
    ImgAlt?: string,
    BlogTitle: string,
    BlogDesc: string,
}

export const Box = (
    {
        ImgUrl,
        ImgAlt,
        BlogTitle,
        BlogDesc
    }: BoxProps
) => {
    return (
        <div className={styles.Box}>
            <img src={ImgUrl} alt={ImgAlt} />
            <div className={styles.Content}>
                <h5>{BlogTitle}</h5>
                <p>
                    {BlogDesc}
                </p>
            </div>
        </div>
    )
}
