import React from 'react'
import AddForm from './AddForm'
import UserDetails from './UserDetails'

const HomePage = () => {
  return (
    <div className='flex'>
      <div className='w-[40%]'>
        <AddForm />

      </div>
      <div className='w-[60%]'>
        <UserDetails />

      </div>
    </div>
  )
}

export default HomePage