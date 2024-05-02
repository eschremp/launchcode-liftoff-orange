import React, { useState } from "react"
import { queryClient } from "../main";
import ReviewServices from "../Services/ReviewServices"
import axios from "axios";

const ParkDetailsReview = () => {

    const singlePark = queryClient.getQueryData(["singlePark"])
    const parkDetails = singlePark.data[0]
    const REVIEW_API_BASE_URL = "http://localhost:8080/api/v1";
    const parkCode = parkDetails.parkCode;
    const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: REVIEW_API_BASE_URL,
    headers: {
      "Cache-Control": "no-cache",
      "Accept-Language": "en",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      "Authorization" : null
    },
  });

    
    const parkReviews = ReviewServices.getReviewsByParkcode(parkCode, axiosInstance);
    //issue with timing of axios request.
    console.log(parkReviews);

    return (
        /*<>
            {parkReviews.map((review,idx) => <div key ={idx}><h3>{review.username}'s Review of {singlePark.fullname} </h3></div>)} 
        </>*/
        <p>Reviews go here!</p>
    )

}
export default ParkDetailsReview;