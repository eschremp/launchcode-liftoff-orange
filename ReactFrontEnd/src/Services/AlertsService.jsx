import axios from "axios";
import DateService from "./DateService"

const api_key=import.meta.env.VITE_REACT_APP_NPS_API_KEY2;

class AlertsService {

    getWindowAlerts(userId) {
        let itineraryParkCodes =[];
        const fetchedItineraries = (axios.get("http://localhost:8080/api/v1/user/"+userId))
        .then((response) => {
          if(response.data.length > 0){
          const itineraries = response.data;
          itineraryParkCodes = DateService.getDatesForAlerts(itineraries);
          axios.get("https://developer.nps.gov/api/v1/alerts?parkCode="+itineraryParkCodes+"&api_key="+api_key)
            .then((res) => {
              if(res.status == 200) {
                const alertData = res.data;
                if(alertData.length !== 0) {
                  window.alert("Some of your parks may have alerts.")
            }
          }})}
        })
    
    return fetchedItineraries}

    getAlerts(userId) {
        let itineraryParkCodes = [];
        
        const fetchedItineraries = (axios.get("http://localhost:8080/api/v1/user/"+userId))
        .then((response) => {
          if(response.status == 200){
          const itineraries = response.data;
          console.log(itineraries);
          const todaysDate = new Date();
        const todaysMonth = todaysDate.getMonth();
        for(let i = 0; i < itineraries.length; i++) {
            const testDate = new Date(itineraries[i].startDate);
            const testMonth = testDate.getMonth();
            console.log (testMonth - todaysMonth)
            if((testMonth - todaysMonth) <= 1) {
                itineraryParkCodes.push(itineraries[i].parkCode)
                }
            axios.get("https://developer.nps.gov/api/v1/alerts?parkCode="+itineraryParkCodes+"&api_key="+api_key)
                .then((res) => {
                    window.localStorage.setItem("ItineraryAlerts", (JSON.stringify(res.data.data)));
          })}
          }});
    return fetchedItineraries;
        }
    
    
}
export default new AlertsService()