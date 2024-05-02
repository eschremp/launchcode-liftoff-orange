import Slideshow from './Slideshow'
import Header from './Header'
import { useEffect, useState } from 'react'
import AlertsService from '../Services/AlertsService'
import React from 'react'
function Alerts () {
    
    let notices;

    useEffect(()=> {
    const user = JSON.parse(window.localStorage.getItem("User"));
    
    const userId = user.id;
        if(userId > 0){ 
            AlertsService.getAlerts(userId);
            notices = JSON.parse(window.localStorage.getItem("ItineraryAlerts")); 
            console.log(notices);
          } 
    }
        
    );

    
    return (
        <>
        <div className="bg-nps-green-300 h-lvh">
          <Header />
          <Slideshow />
          <div className="flex flex-col border border-nps-green-999 rounded-xl my-10 mx-auto p-6 lg:w-1/2">
            <div className="text-center">Alerts for your planned trips in the next 30 days</div>
            </div>
            <div className="flex flex-col border border-nps-green-999 rounded-xl my-10 mx-auto p-6 lg:w-1/2">
                {/*{notices.map((notice,idx) => (
                <table key={idx}>
                    <thead>
                        <tr>
                            <th>
                                {notice.title}
                            </th>
                            <th>
                                {notice.parkCode}
                            </th>
                        </tr>    
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>{notice.description}</td>
                        </tr>
                    </tbody>    
                </table> ))}  */}  
            </div>
          
        </div>
      </>
        )}

export default Alerts