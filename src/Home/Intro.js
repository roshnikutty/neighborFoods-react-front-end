import React from 'react';
import { connect } from 'react-redux'

const Intro = () => (
        <div>
            <div className="black-box">
                <p>
                    Try out various cuisines and get to know your neighbors.
                    Buy lunch or dinner plates from your neighbors and have a 
                    home-cooked meal experience every day of your busy week!
                </p>
            </div>

            <h2>Wait, how does this work?</h2>

            <div className="black-box">
                <p>
                    Check out the dishes that your neighbors offer, then make 
                    your selections by choosing the number of plates you need.
                </p>
                <p className="or"> or</p>
                <p>
                    Make extra lunch or dinner and post details of your delicacies. 
                    Have your neighbors rave about it the next time you meet!
               </p>
            </div>
        </div>
    );
export default connect()(Intro)
