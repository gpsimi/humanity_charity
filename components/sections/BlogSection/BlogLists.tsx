import Link from 'next/link'
import React from 'react'

const BlogLists = () => {
  return (
    <section className='py-12 lg:py-24'>
      <div className="container mx-auto flex flex-col justify-center items-center space-y-6 ">
        {/* <div>
          BlogList
        </div>
        <div>
          BlogList
        </div>
        <div>
          BlogList
        </div> */}


          <ul>
            <li>
              <Link href="/blog/1">User 1</Link>
            </li>
            <li>
              <Link href="/blog/2">User 2</Link>
            </li>
            <li>
              <Link href="/blog/3">User 3</Link>
            </li>
            <li>
              <Link href="/blog/4">User 4</Link>
            </li>
          </ul>


        
      </div>
    </section>
  )
}

export default BlogLists
