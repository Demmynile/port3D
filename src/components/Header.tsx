import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
 <header className='top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4'>
    <nav>
        <ul>
            <li>
             <Link href = '/' aria-label='Home Page'>
                Ademola Balogun
             </Link>
            </li>
            <li>
            <Link href = '/about' aria-label='About'>
              About
             </Link>
             <Link href = '/projects' aria-label='Projects'>
              Projects
             </Link>
             {/* <Link href = '/' aria-label='Home Page'>
                Ademola Balogun
             </Link> */}
            </li>
        </ul>
    </nav>
 </header>
  )
}
