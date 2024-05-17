import React from 'react'

function Home() {
  return (
    <div className='text-center'>{localStorage.getItem('msg_for_client')}</div>
  )
}

export default Home