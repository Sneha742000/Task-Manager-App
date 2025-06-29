import { Link } from 'react-router-dom'

import React from 'react'

const Home = () => {
  return (
    <div className='p-6 mx-auto max-w-2xl'>
        <h1 className='text-4xl font-semibold text-blue-500 border border-b-slate-700 px-4 py-3 bg-red-100'>Task Manager App... </h1>
        <form>
            
            

        </form>
        <br /><br />
        <Link to = "/form"><button className='bg-gray-400 text-white px-4 py-2 rounded-md'>Add Tasks</button></Link>
            
        </div>
  )
}

export default Home