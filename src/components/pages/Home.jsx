import React from "react";
import "./Home.css";



export const Home = () => {
  return (
<group>
  
    <p>This web application designed to revolutionize<br/> the way people exchange currencies online.<br/>
    on this system, you can quickly and easily<br/> exchange money from one currency to another,<br/> 
         saving time and money in the process.<br/>
<br/> Whether you're a frequent traveler or simply<br/> need to make an international payment,
<br/> Our System makes it easy to exchange <br/>your money with just a few clicks. 
<br/><br/>Our user-friendly interface allows you to quickly <br/>select the currencies you want to exchange, 
<br/>our secure platform ensures that your transactions are safe and reliable.<br/><br/>At Thunder, we believe in transparency and fairness. <br/>That's why we offer competitive exchange rates and low fees,
<br/>so you get the best value for your money</p>

<div className="card-group">
        <div className="row">
          <div className="card card0">
            <img src="../images/dirham.jpeg" alt="Dirham" />
            <h5>Moroccan Dirham</h5>
          </div>
          <div className="card card1">
            <img src="../images/dollar.jpeg" alt="Dollar" />
            <h5>United States dollars</h5>
          </div>
        </div>
        <div className="row">
          <div className="card card2">
            <img src="../images/pound.jpeg" alt="Pound" />
            <h5>pound</h5>
          </div>
          <div className="card card3">
            <img src="../images/kwacha.jpeg" alt="Kwacha" />
            <h5>Kwacha</h5>
          </div>
        </div>
      </div>
    </group>
  );
};