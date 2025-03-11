import React from "react"; 
import dash1  from "../assets/dash1.png";
import dash2  from "../assets/dash 2.png";
import dash3  from "../assets/dash3.png";

import "../App.css";
const Dashboard = () => {
  return (
    <>
    <nav>
      <h5>Dashboard</h5>
    </nav>
    <div className="dashimg">
     <img src={dash3}style={{marginLeft:"2rem", width:"96%", height:"32rem"}}/>
     <img src={dash1} style={{marginLeft:"2.1rem", width:"47%"}} />
     <img src={dash2} style={{marginLeft:"2.3rem", width:"47%"}}/> 
    </div>

     </>
  );
};
export default Dashboard;