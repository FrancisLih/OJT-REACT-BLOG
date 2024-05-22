import React from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'

const PopularCategory = ({height="lg"}) => {
  return (
    <section className='feature py-10'>
    <div className="container">
        <SectionHeader title="Popular Category" hasLink={true} links="/feature"/>
        <div className='grid mt-10 gap-10 md:grid-cols-4'>
        <Card height='xs'/>
        <Card height='xs'/>
        <Card height='xs'/>
        <Card height='xs'/>

        </div>
    </div>
    </section>
  )
}

export default PopularCategory