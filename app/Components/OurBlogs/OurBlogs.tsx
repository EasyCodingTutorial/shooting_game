import React from 'react'

import styles from './OurBlogs.module.css'
import { Box } from './Box'


// For Blogs Data
import { BlogsData } from '@/Static/blogsData'

export const OurBlogs = () => {
    return (
        <div className={styles.Blogs}>
            <h6>Our Blogs</h6>

            <div className={styles.Row}>
                {
                    BlogsData.map((I) => (
                        <Box
                            BlogDesc={I.blogDesc}
                            BlogTitle={I.blogTitle}
                            ImgUrl={I.blogImgUrl}
                            ImgAlt={I.blogTitle}
                            key={I.id}
                        />
                    ))
                }
            </div>

        </div>
    )
}
