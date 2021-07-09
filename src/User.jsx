import React from 'react'

function User({handleInputNamingFunc}) {
  return (
    <div>
      {handleInputNamingFunc('first name')}
      {handleInputNamingFunc('last name')}
      {handleInputNamingFunc('role')}
    </div>
  )
}

export default User
