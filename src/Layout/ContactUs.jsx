import React from 'react'
import ContactList from '../Component/ContactList'
import From from '../Component/From'

function ContactUs() {
  return (
    <>
   <div className="flex flex-col items-center  gap-y-10  md:gap-y-0 md:flex-row justify-between mt-10 md:mt-15 lg:mt-20">
<ContactList/>
<From/>

   </div>
    
    </>
  )
}

export default ContactUs