import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";





    

class LoginService {

    
    login(user, instance) { 
        
        
        if (user.username.length >0 && user.password.length > 0) {
        instance.post("/user",user)
            .then((response) => {
                if(response.status == 200) {
                window.localStorage.setItem("User", JSON.stringify(response.data));
                const hash = window.btoa(user.username+":"+user.password);
                const authHeader = "Basic "+ hash;
                window.localStorage.setItem("Auth", authHeader);
                //navigate("/");
        }});
            
        };
           
    }
};
export default new LoginService();
 