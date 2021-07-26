import React, {
    useEffect,
    useState
} from 'react'
import Grid from '@material-ui/core/Grid';
import {getProfile} from '../../api/apiCalls';
import Box from '@material-ui/core/Box';
import styles from '../StorySection/storySection.module.css';
import Skeleton from '@material-ui/lab/Skeleton';

const StorySection = (props) => {

    const [storyData, setStoryData] = useState([]);
    const [loading, setLoading] = useState(true);



   

    useEffect(() => {
        
        const fetchData = async () => {

            const stories = await getProfile();
    
            setStoryData(stories);
            setLoading(false); 
        }

        fetchData();

    }, []);

    console.log(storyData);
    return (
        
         <Grid item md={props.sizeMd} xs = {props.sizeXs} className={styles.storySection} >
      <Box  display="flex" flexDirection="row" justifyContent="space-around"  >
            {!loading ? <>
                {storyData.slice(0,6).map((item,index)=> (
            <div key={index}>
                <div className={styles.imageContainer}>
                <img   alt={item.profile_name} src={item.profile_picture}  class={styles.avatarImage}  /> 
                </div>
          <p className={styles.avatarText}>{item.profile_name}</p> 


              </div>
            )
        )}
        {/* a demo array for 6 skeleton items */}
            </>: <>
            {[1,2,3,4,5,6].map(item=>(
                           <Skeleton animation="wave" variant="circle" width={65} height={65} />

            ))}
            </>}
       

        </Box>

        </Grid>
    )
}

export default StorySection;