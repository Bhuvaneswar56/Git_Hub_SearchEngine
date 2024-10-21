import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import ProfileSideBar from "../Components/ProfileSidebar";
import RepoSection from "../Components/RepoSection";
import GITHUB_INSTANCE from "../Services/api";
import BgImg1 from '../assets/Images/Black bgImg.jpg'

function Userdetails() {
  let [userProfileData, setUserProfileData] = useState();
  let [repoData ,setRepoData]= useState([]);

  let {userName} = useParams();


  async function fetchUsersData() {
    try {

        const profileUrl = `/users/${userName}`;
        const repoUrl = `/users/${userName}/repos`
        
        const profile = await GITHUB_INSTANCE.get(profileUrl)
        console.log(profile.data);
        const repo = await GITHUB_INSTANCE.get(repoUrl)
        console.log(repo.data)

      setUserProfileData(profile.data);
      setRepoData(repo.data)

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
  
      <div className=" min-h-screen bg-cover bg-fixed bg-no-repeat bg-center"
         style={{ backgroundImage: `url(${BgImg1})` }} >
      <div className="grid grid-cols-5 gap-4">
                <div className="col-span-1 border-white-700 border text-white">
                    <ProfileSideBar userProfileData={userProfileData} />
                </div>
                <div className="col-span-4 border-white-700 border text-white">
                    <RepoSection repoData={repoData} />
                </div>
    </div>
    </div>



  
  );
}

export default Userdetails;
