import React from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'

const FashionStyle = () => {
  return (
    <section className='feature py-10'>
    <div className="container">
        <SectionHeader title="Fashion & Style" hasLink={true} links="/feature"/>
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

export default FashionStyle