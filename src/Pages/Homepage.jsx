import React, { useState } from 'react';
import ProfileSection from '../Components/ProfileSection';
import SearchSection from '../Components/SearchSection';
import axios from 'axios';
import BgImg from "../assets/Images/Home Bg-img.webp"; // Correctly import the image

function Homepage() {
   
   let [usersData, setUsersData] = useState('');

   return (
      <div
         className="relative h-screen bg-cover bg-center"
         style={{ backgroundImage: `url(${BgImg})` }} 
      >
         {/* Move the search section to the top */}
         <div className="flex flex-col items-center justify-start pt-6"> {/* Use padding for spacing */}
            <SearchSection/>
         </div>

         
      </div>
   );
}

export default Homepage;
