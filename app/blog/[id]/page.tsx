import React from 'react'

const page = ({params}: {params: {id: string} }) => {
    const {id} = params;

  return (
    <div className='text-3xl'>
      Each Blog Post:  {id}

    </div>
  )
}

export default page
