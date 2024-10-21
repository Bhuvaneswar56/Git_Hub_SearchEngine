import React from 'react'
import ProfileCard from './ProfileCard'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProfileSection() {
   
  let {user} =useParams()
  let [usersData,setUsersData] = useState('')

  async function fetchUsersData() {
    try {
       let res = await axios.get(`https://api.github.com/search/users?q=${user}`);
       setUsersData(res.data);
    } catch (err) {
       console.log(err);
    }
 }

 useEffect (()=>{
  if(user){
  fetchUsersData()
  }
 },[user])

  return (
    <>
    <div className='flex flex-row flex-wrap w-11/12 mx-auto gap-4'>
    {usersData && usersData.items.map((user) =>{
     return (
        <ProfileCard key={user.id}
        profileImgUrl ={user.avatar_url}
        ProfileUrl={user.html_url}
        ProfileName={user.login}
        />
     )
    })

    }
    </div>
    
    </>
   
  )
}

export default ProfileSection
