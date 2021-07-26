import React  from 'react'
import profile2 from '../../profile2.jpg';
import Grid from '@material-ui/core/Grid';
import styles from '../StorySide/storySide.module.css';
 const StorySide=(props)=> {

    
 

    return (
       
        <Grid item md={props.sizeMd} xs= {props.sizeXs} className={styles.storySideSection}>
            <img src={profile2} className={styles.staticProfile} alt="static profile" />
            <div className="profileName">
                <p className={styles.textName}>Michhelepapagni</p>
                <p className={styles.subText}>Michhelepapagni</p>

            </div>
            <p className={styles.switch}>Switch</p>
        </Grid>
        
    )
}


export default StorySide;