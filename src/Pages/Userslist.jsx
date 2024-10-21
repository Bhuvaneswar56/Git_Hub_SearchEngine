import React from 'react'
import SearchSection from '../Components/SearchSection'
import ProfileSection from '../Components/ProfileSection'
import BgImg1 from '../assets/Images/Black bgImg.jpg'



function Userslist() {



  return (
    <div className=" min-h-screen bg-cover bg-fixed bg-no-repeat bg-center"
    style={{ backgroundImage: `url(${BgImg1})` }} >
      <div className="flex flex-col items-center justify-start pt-6"> {/* Use padding for spacing */}
            <SearchSection/>
         </div>

      {/* Profile section stays below */}
         <div className="flex flex-col items-center justify-center mt-4"> {/* Add margin top if needed */}
            <ProfileSection />
         </div>
    </div>
  )
}

export default Userslist
