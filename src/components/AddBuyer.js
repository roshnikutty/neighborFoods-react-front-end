import React from 'react';
import './app.css';

export default function AddBuyer(){
    return(
        <div>
        <form className="black-box">
            <input type="text" className="blank"/> from 
                <input type="text" className="blank"/> 
                    at $<input type="number" className="blank"/> per plate<br/><br/>  
            
            <input type="text" className="blank" placeholder="Buyer's name" required/><br/>
            <input type="text" className="blank" placeholder="Date as mm/dd/yyyy" required/><br/>
            <input type="number" className="blank" placeholder="Number of plates" required/><br/>
            <input type="text" className="blank" placeholder="Email address" size="35" required/><br/><br/>
            
            Total price of this selection $<input type="number" className="blank" placeholder="Total"/>
            <button className="landing-button">Get this</button>
        </form>

    <button className="landing-button">Search for more</button>
    </div>

    );
}