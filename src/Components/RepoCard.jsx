import React from 'react'

function RepoCard({repoData}) {

    let {name ,private: isPrivate ,html_url ,description}=repoData
  return (
    <div className= 'm-3 p-3 border border-black  shadow-lg shadow-white gap-2' >
      
      <h2 className ='font-bold'> {name}</h2>
      <h3> {isPrivate ? 'private':'public'}</h3>
      <a href={html_url}> Repo link</a>
      <p> {description}</p>
    </div>
  )
}

export default RepoCard
