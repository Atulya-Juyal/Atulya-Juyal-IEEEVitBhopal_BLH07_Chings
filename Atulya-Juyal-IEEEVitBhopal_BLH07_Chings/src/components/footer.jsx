import React from 'react'

function footer() {
  return (
      <>
    <div className='bg-purple-700 flex items-center justify-center fixed bottom-0 w-full h-16'> 
        <div className="logo font-bold text-3xl mx-2 pb-1">
         <span className='text-purple-900 '> &lt;</span>
            <span className='text-white font-mono'>Pass</span>
        <span className='text-purple-900'>CD/&gt;</span> 
         </div>
        <div className='flex text-white font-mono font-bold text-2xl'><span>Created with </span><img className='w-8 mx-1' src="heart.png" alt="" /> <span> by S.Darsan</span></div>
    </div>
    </>
  )
}

export default footer
