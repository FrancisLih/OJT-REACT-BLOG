import React from 'react'

const PopularCard = () => {
  return (
    <div className="card__lg shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl">

    <div className={`overflow-hidden rounded-xl mb-5 -mt-10 ${height === "lg" ? "h-[500px]" : "h-[300]" }`}>

    <img src="https://starmometer.com/wp-content/uploads/2021/06/BINI-will-unveil-a-fiercer-look-sound-and-attitude-at-their-grand-two-part-launch-this-June-on-KTX.PH-2.jpg" alt="" className={`w-full object-cover $ rounded-xl  h-full overflow-hidden  hover:scale-110 transition-transform`}/>
    </div>

        <h3 className='my-4'>Fashion & Style</h3>
       
    </div>

  )
}

export default PopularCard