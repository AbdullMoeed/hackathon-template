import Image from 'next/image'
import React from 'react'
import NavSNKRS from './NavSNKRS'

const Upcoming = () => {
  return (
    <>
    <NavSNKRS />
    <div className='grid grid-cols-12 justify-center gap-2 space-x-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        <Image src="/Images/pcard1.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard2.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard11.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard12.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard3.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard4.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard5.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard6.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard7.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard8.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard10.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard11.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard12.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard12.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard12.png" alt='pcard' width={140} height={70} />
        <Image src="/Images/pcard1.png" alt='pcard' width={140} height={70} />
        
        

    </div>
    </>
  )
}

export default Upcoming