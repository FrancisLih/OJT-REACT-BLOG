import React from 'react'
import Card from './Card'
import SectionHeader from './SectionHeader'

const Feature = () => {
  return (
    <section className='feature py-10'>
    <div className="container">
        <SectionHeader title="Featured Now" hasLink={true} links="/feature"/>
        <div className='grid mt-10 gap-10 md:grid-cols-3'>
        <Card height='sm'/>
        <Card height='sm'/>
        <Card height='sm'/>
        <Card height='sm'/>
        <Card height='sm'/>
        </div>
    </div>
    </section>
  )
}

export default Feature