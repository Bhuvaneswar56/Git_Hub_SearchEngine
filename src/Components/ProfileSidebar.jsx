import React from 'react'

function ProfileSideBar({userProfileData}) {

    if(!userProfileData){
        return <h1> Loading ...</h1>
    }
    let{avatar_url,login,html_url}=userProfileData


  return (
    <div>
      ProfileSideBar
      <img src={avatar_url} alt={login} className='h-44 w-44 rounded-lg'/>
      <a href={html_url}> {login} </a>
    </div>
  )
}

export default ProfileSideBar
