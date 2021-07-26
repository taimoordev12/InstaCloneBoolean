import React,{Fragment,useEffect,useState} from 'react'
import Header from '../../components/Header/Header.component';
import Grid from '@material-ui/core/Grid';
import StorySection from '../../components/StorySection/storySection.component.jsx';
import Container from '@material-ui/core/Container';
import Post from '../../components/Post/post.component';
import StorySide from '../../components/StorySide/storySide.component';
import SuggestionSection from '../../components/SuggestionSection/suggestionSection.component';
import {getPosts} from '../../api/apiCalls';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from '../HomePage/home.module.css';

const Home=()=> {

   const [postsData, setPostsData] = useState([]);
   const [loading, setLoading] = useState(true);


   useEffect(() => {

      const fetchData = async () => {

         const data = await getPosts();
         setPostsData(data);  
         setLoading(false); 
        
     }

     fetchData();      

  }, []);
 
    return (

        <Fragment>        
       <Header/>

       {/* body of the page wrapped in material UI container starts from here */}

     <Container fixed>
        <Grid container>
           <StorySection sizeXs={12} sizeMd={7}/> 
           <StorySide sizeXs={0} sizeMd={5}/> 
       </Grid>

{/* skeleton for loading will stop rendering when data is fetched and loading is set to false */}

         {!loading ? 
          <Grid container>
           {postsData?.map((item,index)=> (
            <>
            {/* Suggestion Section is only rendered for the first Post corrospondance  */}
            <Post key={index} sizeXs={12} sizeMd={7} data={item}/>
            {index===0 ?<SuggestionSection size={5}/>:'' }
            </>
           ))}
        
        </Grid>: <Grid container>
           <Grid item xs={7}  >
               <div className={styles.skeletonFlex}>
           <Skeleton animation="wave" variant="circle" width={65} height={65} />
           <Skeleton variant="text" width={150} height={20} className={styles.marginL10} />

           </div>
           <Skeleton variant="rect" width={600} height={800} />

 
            </Grid>
            {/* classes are added here conditionally if the first item is rendered margin top is 70px for other items margin is 10px */}
           <Grid xs={5} >
              {[1,2,3,4,5,6].map(item=>(
               <div className={`${item>1?styles.suggestionFlex:styles.skeletonFlex} ${styles.marginL70}`}>
               <Skeleton animation="wave" variant="circle" width={45} height={45} />
               <Skeleton variant="text" width={150} height={20} className={styles.marginL10} />
               </div>
              ))}
             
            </Grid>
           </Grid>}
       
       
        </Container>
       </Fragment>

    )
}

export default Home;