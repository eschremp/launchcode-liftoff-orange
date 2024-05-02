import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Slideshow from './Slideshow'
import Header from './Header'
import axios from 'axios';
import LoginService from '../Services/LoginService';
import { useNavigate } from "react-router-dom";

const api_key=import.meta.env.VITE_REACT_APP_NPS_API_KEY;
const parkAlertURL = "https://developer.nps.gov/api/v1/alerts?parkCode=YELL%2CACAD%2CROMO&api_key="+api_key;
const SERVER_API_BASE_URL = "http://localhost:8080/";
const axiosInstance = axios.create({
        withCredentials: true,
        baseURL: SERVER_API_BASE_URL,
        headers: {
        "Cache-Control": "no-cache",
        "Accept-Language": "en",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
        "Authorization": null,
        
        }});

function Login() {
    const [userLogin, setUser] = useState({username: "",password: ""})
    //const [loggedInUser, setLoggedInUser] =useState({username:"",password: "" })
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        LoginService.login(userLogin, axiosInstance);
        };
        
          
      
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUserLogin => ({ ...prevUserLogin, [name]: value }));
      };
      
      return (<>
        <Header />
        <Slideshow />
    
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={userLogin.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={userLogin.password}
            onChange={handleChange}
            placeholder="Enter a Password"
          />
          <button type="submit">Submit</button>
        </form>
        </>
      );
    }
    
    export default Login
