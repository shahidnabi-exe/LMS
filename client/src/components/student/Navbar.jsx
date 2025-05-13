import React from 'react'
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import MyEnrollments from '../../pages/student/MyEnrollments';



function Navbar() {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');


  return (
    <div className={` flex justify-between items-center px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4  ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'} `}>
      <img src={assets.logo} alt="logo" className='w-28 lg:w-32 cursor-pointer mr-66'  />

      <div className='hidden md:flex gap-5 items-center text-gray-500'>
        <div className='flex gap-5 items-center'> 
          <Link to='/become-educator'>Become Educator</Link>
          | <Link to='/my-enrollments'>My Enrollments</Link> 
        </div>
        <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>

      </div>
      
      <div>

      </div>
    </div>
  )
}

export default Navbar