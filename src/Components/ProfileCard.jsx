import React from 'react'
import {Link} from 'react-router-dom'

function ProfileCard({profileImgUrl ,ProfileUrl, ProfileName}) {
  return (
    <div className='flex flex-col rounded-lg m-10 text-white shadow-lg shadow-purple-600'>
      <img src={profileImgUrl} alt={ProfileName} className='h-44 w-44 rounded-lg'/>
      <a href={ProfileUrl}> {ProfileName} </a>
      <Link to={`/users/${ProfileName}`}> More Details</Link>
    </div>
  )
}

export default ProfileCard
