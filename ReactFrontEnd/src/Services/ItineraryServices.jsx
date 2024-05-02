import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'

const ITINERARY_API_BASE_URL = "http://localhost:8080/api/v1/itinerary";

class ItineraryService {
  

  CreateItinerary(itinerary,instance) {
    
    instance.defaults.headers["Authorization"] = window.localStorage.getItem("Auth");
    instance.post('/createitinerary',itinerary)
    .then((response) => {
      if(response.status == 201) {
        return true;
      }else{return false}});
    }
  

  deleteItinerary(id) {
    return axios.delete(ITINERARY_API_BASE_URL + "/" + id);
  }

  getItinerariesByParkCode(parkCode) {
    return axios.get(ITINERARY_API_BASE_URL + "/" + "parkcode" + parkCode);
  }

  getItinerariesByUserId(userId,instance) {
    if (window.localStorage.getItem("Auth")) {
      instance.defaults.headers["Authorization"] = window.localStorage.getItem("Auth");
      instance.get('/user/'+userId)
      .then((response) => {
      console.log(response)});
  }
}}

export default new ItineraryService();