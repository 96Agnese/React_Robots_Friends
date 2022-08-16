import React, {useState} from 'react';

const SearchBox = ({searchChange, searchfield}) => {


    return (
        <div className='pad2'>
        <input 
        onChange={searchChange}
        className='pad3 ba b--green bg-light-green'
        type='search'
         placeholder='search roboys' 
         />
         </div>
    )
}

export default SearchBox;