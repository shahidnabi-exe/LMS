import { useState } from 'react'
import './index.css';
import './App.css'
import { Route, Routes, useMatch } from 'react-router-dom';
import Home from './pages/student/Home';
import CoursesList from './pages/student/CoursesList';
import CoursesDetails from './pages/student/CoursesDetails';
import MyEnrollments from './pages/student/MyEnrollments';
import Player from './pages/student/Player';
import Loading from './components/student/Loading';
import AddCourse from './pages/educator/AddCourse';
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import Navbar from './components/student/Navbar';


function App() {

  const isEducatorRoute = useMatch('/educator/*');

  return (
    
      <div className='text-default min-h-screen bg-white w-full'>
        {!isEducatorRoute && <Navbar /> }
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/course-list' element= {<CoursesList />}/>
          <Route path='/course-list/:input' element= {<CoursesList />}/>
          <Route path='/course/:id' element= {<CoursesDetails />}/>
          <Route path='/my-enrollments' element= {<MyEnrollments />}/>
          <Route path='/player/:coursesId' element= {<Player />} />
          <Route path='/loading/:path' element= {<Loading />} />
          <Route path='/educator' element= {<Educator />} >
            <Route path = 'educator' element={<Dashboard />} />
            <Route path='add-course' element= {<AddCourse />} />
            <Route path = 'my-courses' element={<MyCourses />} />
            <Route path='students-enrolled' element={<StudentsEnrolled />} />
          </Route>
        
        </Routes>



      </div>
  )
}

export default App
