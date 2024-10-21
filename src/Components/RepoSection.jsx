import React from 'react'
import RepoCard from './RepoCard'

function RepoSection({repoData}) {

    if(!repoData){
        return(
            <h1> Loading... </h1>
        )
    }
  return (
    <div className='grid grid-cols-2 '>
    {repoData.map((repo)=> <RepoCard repoData={repo}/>
    )}
    
    </div>
  )
}

export default RepoSection
