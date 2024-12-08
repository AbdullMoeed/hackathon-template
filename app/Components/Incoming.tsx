import Image from 'next/image'
import React from 'react'
import NavSNKRS from './NavSNKRS'

const Incoming = () => {
  return (
    <>
    <NavSNKRS />
    <div className='grid grid-cols-2 items-center justify-center px-5 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
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

export default Incoming