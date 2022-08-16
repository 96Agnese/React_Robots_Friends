import React from 'react';

const Card = ({email, name, id}) => {
    return (
        <div className='bg-light-green'>
            <img alt= 'robots' src={`https://robohash.org/${id}?200x200`} /> 
            <div>
           <h2>{name}</h2>
            <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;