import FooterCTA from '@/components/FooterCTA';
import Header from '@/components/Header';
import MissionVisionValues from '@/components/MissionVisionValues';
import TopBar from '@/components/TopBar';
import React from 'react'

const AboutPage = () => {
  return (
    <div>
        <TopBar/>
        <Header/>
        <MissionVisionValues/>
        <FooterCTA/>
    </div>
  )
}

export default AboutPage;