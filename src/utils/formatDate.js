import moment from "moment";
//unix formatındaki zamanı normal tarihe çeviren fonk
const formatDate = (unix_time)=> {
    
    const formatted= new Date(unix_time*1000);
     
return  moment(formatted).calendar();

};
export default formatDate;