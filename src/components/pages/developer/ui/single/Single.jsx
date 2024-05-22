import React from 'react'
import UIFooter from '../partials/UIFooter'
import UIHeader from '../partials/UIHeader'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Single = () => {
  return (
    <>
         <UIHeader/>
         <div className='banner mt-5 mb-10'>
            <div className="container">
                <h1 className='max-w-[800px] mb-0 mx-auto py-10 px-5 bg-header bg-opacity-10 rounded-lg border-2 border-header border-opacity-40'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
            </div>
         </div>
        
        <div className="container">
            <div className='grid md:grid-cols-[2fr_1fr] gap-10'>
                <article>
                    <div className='mb-10'>
                    <img src="https://data-corporate.abs-cbn.com/corp/medialibrary/dotcom/narrowcast%20pr%20star%20music%202023/1206%20-%20bini%20pantropiko/bini.jpg" alt="" />

                    <small className='hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold text-xs mb-3 inline-block mt-2'>Travel</small>

                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

                        <div className='flex justify-between items-center mt-4'>
                                <div className='flex gap-3 items-center'>
                                    <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full size-10 object-cover mb-0' />
                                    <small className='mb-0 text-nowrap opacity-60'>Johnny Hale</small>
                                </div>
                            <small className='opacity-60'>August 23, 2022</small>
                    </div>
                    </div>

                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam id architecto repudiandae delectus. Id magni obcaecati deleniti officiis nobis!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perferendis excepturi dolores temporibus architecto mollitia laboriosam iusto. Asperiores cupiditate, recusandae iure eaque consequatur possimus eos assumenda, magni ipsa fuga aperiam.</p>

                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam id architecto repudiandae delectus. Id magni obcaecati deleniti officiis nobis!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perferendis excepturi dolores temporibus architecto mollitia laboriosam iusto. Asperiores cupiditate, recusandae iure eaque consequatur possimus eos assumenda, magni ipsa fuga aperiam.</p>
                    <img src="https://data-corporate.abs-cbn.com/corp/medialibrary/dotcom/narrowcast%20pr%20star%20music%202023/1206%20-%20bini%20pantropiko/bini.jpg" alt="" />

                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veritatis odio.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veritatis odio.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veritatis odio.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veritatis odio.</li>
                    </ul>
                </article>
                <aside>
                    <div className="sticky top-4">
                <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl mb-5 ">
                    <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full size-[100px] object-cover mb-0 mx-auto' />
                    <h3 className='text-center'>Johnny Hale</h3>
                    <p className='text-center mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, ad voluptates molestiae recusandae eos magnam sint officia sed laborum rem aspernatur nostrum, velit repudiandae accusamus.</p>

                    <ul className='flex justify-center gap-4'>
                        <li><Link className='text-2xl'><FaFacebook/></Link></li>
                        <li><Link className='text-2xl'><FaTwitter/></Link></li>
                        <li><Link className='text-2xl'><FaInstagram/></Link></li>
                        <li><Link className='text-2xl'><FaYoutube/></Link></li>
                    </ul>
                    </div>

                    <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl mb-5 ">
                        <h2>Latest Post</h2>
                        <div className='grid grid-cols-[50px_1fr] gap-3 mb-4'>
                            <img src="https://data-corporate.abs-cbn.com/corp/medialibrary/dotcom/narrowcast%20pr%20star%20music%202023/1206%20-%20bini%20pantropiko/bini.jpg" alt="" className='h-full w-full object-cover' />
                            <div>
                                <h4 className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <small>May 5, 2002</small>
                            </div>
                        </div>
                        <div className='grid grid-cols-[50px_1fr] gap-3 mb-4'>
                            <img src="https://data-corporate.abs-cbn.com/corp/medialibrary/dotcom/narrowcast%20pr%20star%20music%202023/1206%20-%20bini%20pantropiko/bini.jpg" alt="" className='h-full w-full object-cover' />
                            <div>
                                <h4 className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <small>May 5, 2002</small>
                            </div>
                        </div>
                        <div className='grid grid-cols-[50px_1fr] gap-3 mb-4'>
                            <img src="https://data-corporate.abs-cbn.com/corp/medialibrary/dotcom/narrowcast%20pr%20star%20music%202023/1206%20-%20bini%20pantropiko/bini.jpg" alt="" className='h-full w-full object-cover' />
                            <div>
                                <h4 className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <small>May 5, 2002</small>
                            </div>
                        </div>
                    </div>
                    </div>
                </aside>
            </div>
         </div>
         <UIFooter/>

    </>
  )
}

export default Single