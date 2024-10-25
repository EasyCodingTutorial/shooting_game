import React from 'react';
import styles from './ShootingTraining.module.css';

interface ShootingBoxProps {
    h5Text: string;
    pText: string;
    liText: { id: number; text: string }[]; // Updated to accept an array of highlights
}

export const ShootingBox = ({
    h5Text,
    pText,
    liText
}: ShootingBoxProps) => {
    return (
        <div className={styles.Box}>
            <div>
                <h5>{h5Text}</h5>
                <p>{pText}</p>

                <ul>
                    {liText.map((item) => (
                        <li key={item.id}>╰┈➤ {item.text}</li> // Maps each item to a separate row
                    ))}
                </ul>
            </div>
        </div>
    );
};
