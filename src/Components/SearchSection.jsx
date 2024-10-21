import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchSection() {

  let [searchTerm, setSearchTerm] = useState('');

  function onChangeHandler(e) {
    setSearchTerm(e.target.value)
  }
  return (
    <div className='flex flex-row text-center mt-4 gap-4 '>
      <input className='border border-black mr-2 px-6 rounded-lg outline-none'
        type='text'
        name='username'
        value={searchTerm}
        onChange={onChangeHandler}
        placeholder='Please search'
      />

      <div >
        <Link to={`/search/${searchTerm}`}
          disabled=""
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-8 rounded-full shadow-lg flex items-center transition duration-300 transform hover:scale-105 active:scale-95"
        >
          Search
        </Link>
      </div>





    </div>


  )
}

export default SearchSection
