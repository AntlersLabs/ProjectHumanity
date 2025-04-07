import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { PropsWithChildren } from 'react'

const Default = ({children}: PropsWithChildren) => {
  return (
    <div className=' flex flex-col'>

<Navbar />
{children}
<Footer />
    </div>
  )
}

export default Default