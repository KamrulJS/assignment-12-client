import React from "react";
import {  FaCheck } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center lg:flex-row gap-10 items-center w-11/12 mx-auto my-4">
      <div>
        <img className="rounded-xl w-5/6" src="https://images.squarespace-cdn.com/content/v1/5adf50e145776e10ea394152/1653600371569-EVXQX84CE5Z1YKG39AI9/IMG_9756.jpeg" alt="" />
      </div>
      <div>
        <h1 className="section-title">About Us</h1>
        <h3>Learn The Music From The Core & Become Mastery</h3>
        <p>
        Welcome to Musiquest, the premier online destination for music education. Explore our expertly crafted courses, connect with fellow music lovers, and unlock your musical potential. Join us and embark on a transformative musical journey today.
        </p>
        <div className="flex gap-6 my-4">
         
                  <div>
                  <p className="my-2">✓ Diverse Course Selection</p>      
                <p>✓ Experienced Instructors</p>  
                  </div>    
                  <div>
                  <p className="my-2">✓ Interactive Community</p>      
                      <p>✓ Flexible Learning</p>
                  </div>   
          
              </div>
              <button className="button">About Us</button>
      </div>
    </div>
  );
};

export default AboutUs;
