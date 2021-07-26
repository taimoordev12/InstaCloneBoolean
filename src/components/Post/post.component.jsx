import React,{useEffect,useState} from 'react'
import Grid from '@material-ui/core/Grid';
import styles from '../Post/post.module.css';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import {getHoursDifference} from '../../util/util';
 
  const Post=(props)=> {

  const [hoursData, setHoursData] = useState([]);

    useEffect(() => {

     const data=getHoursDifference(props?.data?.date.date);

     setHoursData(Math.round(data));  
  
    }, [props]);
    
 
    return (
       <Grid item xs={props.sizeXs} md={props.sizeMd} className={styles.body}>
            
          {/* optional chaining is frequently used here to ensure if any key is not sent from the backend it doesnt create an error */}
            <div className={styles.header} >
                <div className={styles.avatarContainer}>
                   <img className={styles.avatar} src={props?.data?.profile_picture} alt={props?.data?.profile_fullname}  />
                </div>
                <p className={styles.headingName}>{props?.data?.profile_fullname}</p>
            <button className={styles.headerBtn}>...</button>
            </div>


                {/* main post Image */}
                <img src={props?.data?.profile_picture} className={styles.postImg} alt="" />


           {/* React icons are used for here instead of matrerial UI icons because material UI didnt had all the required icons */}
            <div className={styles.actions}>
            <AiOutlineHeart />   

            <FaRegComment className={styles.commentIcon}/>
             </div>

              {/* If like is more then one then rest of the string is rendered else only single like name and image is shown */}
            <div className={styles.likeSection}>
            <img src={props?.data?.likes[0]?.profile_picture} alt={props?.data?.likes[0]?.username} className={styles.likeAvatar}/> 
            <p className={styles.likeText}>Liked by <span className={styles.fontBold}>{props?.data?.likes[0]?.username}</span> {props?.data?.likes.length>1 ? <span> and <span className={styles.fontBold}>{props?.data?.likes.length-1} others</span> </span>:''} </p>
            </div>

            {/* Only 3 comments are shown by slicing the comments array */}
            <div className={styles.commentSection}>

                <p><span className={styles.fontBold}>{props?.data?.profile_name}</span> {props?.data?.post_text}</p>
              {props?.data?.comments.length >3 ? <p className={styles.greyedText}>See all {props?.data?.comments.length} comments</p>:'' } 
                {props?.data?.comments.slice(0,3).map((item,index)=>(
                <p className={styles.commentMargin} key={index}><span className={styles.fontBold}>{item.username}</span> {item.text}</p>
                   ))}

                   <p className={styles.greyedText}> {hoursData} hours ago</p>
                    <div  className={styles.inputRow}>
                    <input className={styles.commentInput} type="text" placeholder="Add a comment" /> 
                    <button className={styles.commentBtn}>Post</button>
                    </div>
            </div>
            
  
       </Grid>
    )
}

export default Post;