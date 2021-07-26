import React, {
    useEffect,
    useState
}  from 'react'
import Grid from '@material-ui/core/Grid';
import {getProfile} from '../../api/apiCalls';
import styles from '../SuggestionSection/suggestionSection.module.css';

const SuggestionSection=(props)=> {

    const [suggestions, setSuggestions] = useState([]);


    const fetchData = async () => {

        const data = await getProfile();

        setSuggestions(data);
    }

    useEffect(() => {

        fetchData();

    }, []);

    return (
        <Grid item xs= {props.size} className={styles.responsive}  >
            <div className={styles.suggestionText}>
          <p className={styles.textMain}>Suggestions For You</p>
          <p className={styles.subMain} >See All</p>  
          </div>
          
          <div className="">
            {suggestions.map((item,index)=>(
                <div key={index} className={styles.suggestionRow}>
                    <img className={styles.suggestionImg} src={item.profile_picture} alt={item.profile_name} />
                    <p className={styles.subMain}>{item.profile_name}</p>
                    <p className={styles.suggestionFollow}>Follow</p>
                </div>
            ))}
          </div>

        </Grid>
    )
}

export default SuggestionSection;