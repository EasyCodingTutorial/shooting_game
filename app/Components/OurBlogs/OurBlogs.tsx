import React from 'react'

import styles from './OurBlogs.module.css'

import { Box } from './Box'

// For Data
import { BlogsData } from '@/Static/blogsData'


export const OurBlogs = () => {
    return (
        <div className={styles.Blogs}>
            <h6>Our Blogs</h6>

            <div className={styles.Row}>
                {
                    BlogsData.map((I) => (
                        <Box
                            blogDesc={I.blogDesc}
                            BlogTitle={I.blogTitle}
                            ImgUrl={I.blogImgUrl}
                            key={I.id}
                        />
                    ))
                }
            </div>

        </div>
    )
}
