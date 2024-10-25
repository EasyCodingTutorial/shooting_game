"use client"
import React from 'react'

import styles from './newModel.module.css'


// 
import { StlViewer } from "react-stl-viewer";

export const NewModel = () => {
    return (
        <div className={styles.NewModel}>
            <div>
                <h6>New Launch</h6>
                <StlViewer
                    orbitControls
                    shadows
                    url={'/assets/newmodel.jpg'}
                />
            </div>
        </div>
    )
}