import FooterCTA from '@/components/FooterCTA';
import Header from '@/components/Header';
import TopBar from '@/components/TopBar';
import React from 'react'

const ContactPage = () => {
  return (
    <div>
        <TopBar/>
        <Header/>
        <div className='h-screen bg-white'>
            <h1>CONTACT PAGE</h1>
        </div>
        <FooterCTA/>
    </div>
  )
}

export default ContactPage;