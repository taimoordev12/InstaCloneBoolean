import React from 'react'
import Grid from '@material-ui/core/Grid';
 import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import styles from '../Header/header.module.css';
import logo from '../../logo.png';
import { FaRegHeart } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import profile2 from '../../profile2.jpg';

const Header=()=> {
    return (
        <AppBar position="sticky" className={styles.headerContainer}>
             <Container fixed>
        <Grid container   justifyContent="space-between"
>

             <Grid item xs={6} md={3} className={styles.responsive}>
             <img src={logo} className={styles.logo} alt="logo for instagram clone" />
             </Grid>

             <Grid item xs={0} md={3}  className={styles.headerInput}>
             <input className={styles.input} type="text" placeholder='Search'/>


            </Grid>

            <Grid item xs={6} md={3} className={styles.headerIcon}>
            <FaRegHeart />   
            <FaHome className={styles.homeIcon}/>
            <img src={profile2} className={styles.headerImg} alt='static profile' />

            </Grid> 

        </Grid >
        </Container>
        </AppBar>    
       
    )
}

export default Header;