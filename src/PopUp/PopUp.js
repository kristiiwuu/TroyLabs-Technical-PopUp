import React, { useState } from 'react';
import styles from './PopUp.module.css';

function PopUp({ isVisible, onClose, onSubmit }) {

    if(!isVisible) return null;

    return (
        <div className={styles.container}>
            <div className={styles.close} onClick={onClose}>
                x
            </div>
            <h1>UNLOCK 10% OFF</h1>
            <p>just for you</p>
            <form onSubmit={onSubmit}>
                <input type='text' name='contact' placeholder='Enter your email' required/> 
                <button type='submit'>GET MY 10% OFF CODE!</button>
            </form>
            <div className={styles.deny}>
                <h2 onClick={onClose}>No thanks, I want to miss out</h2>
            </div>
        </div>
    );
}

export default PopUp;