import React from 'react'
import ContactList from '../Component/ContactList'
import From from '../Component/From'

function ContactUs() {
  return (
    <>
   <div className="flex flex-col gap-y-10  md:gap-y-0 md:flex-row justify-between items-cente mt-10 md:mt-20">
<ContactList/>
<From/>

   </div>
    
    </>
  )
}

export default ContactUs