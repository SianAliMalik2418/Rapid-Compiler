import React from 'react'
import Loader from './Loader';

function Output({ outputResult, loading }) {


  return (
    <div className='bg-[#1C1C1C] h-[400px] p-5 overflow-hidden'>

      {
        loading ? (<Loader/>) : (outputResult)

      }

    </div>
  )
}

export default Output