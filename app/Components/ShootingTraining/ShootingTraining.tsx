import React from 'react'

import styles from './ShootingTraining.module.css'


import { ShootingBox } from './ShootingBox'

// For Data
import { TrainingData } from '@/Static/ShootingTrainingData'

export const ShootingTraining = () => {
    return (
        <div className={styles.ShootingTraining}>
            <h6>Shooting Training</h6>

            <div className={styles.Row}>
                {
                    TrainingData.map((I) => (
                        <ShootingBox
                            key={I.id}
                            h5Text={I.TrainingName}
                            pText={I.TrainingDesc}
                            liText={I.TrainingHighLight}
                        />
                    ))
                }
            </div>

        </div>
    )
}
