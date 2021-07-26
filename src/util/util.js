import moment from 'moment';

const getHoursDifference =(dateFromPost)=> {
    // date from API
  const postTime =moment(dateFromPost);
  // current Date
 const currentTime=moment();
 // calculating time diffenence between current time and post time
 const duration = moment.duration(currentTime.diff(postTime)); 
 // getting hours from the date
 const hours = duration.asHours();  

return hours;



 
 
}

export {getHoursDifference};