import React from 'react';
import styles from './Intro.module.css';

function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.descrip}>
                <h1>BE THE HOTTER AND HEALTHIEIR YOU</h1>
                <p>BiotechBeauty combines <span>bioengineered breakthrough ingredients</span> to deliver 
                    exceptional makeup that enhances your  <span>skin's</span> health and aligns with your 
                    commitment to <span>sustainability</span>. No need to compromise—achieve a flawless look, 
                    nurture your skin, and protect the planet all at once.
                </p>
            </div>
            <div className={styles.img}>

            </div>
        </div>
    );
}

export default Intro;