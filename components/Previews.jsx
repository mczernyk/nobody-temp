import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';
import Image from 'next/image'

const Previews = () => {
  const [index, setIndex] = useState(0);



    const picsArray = [
      '/images/milady2black.png',
      '/images/nnnpurple.png',
      '/images/miaurawhite.png',
      '/images/allstarz2berry.png',
      '/images/milaidynavy.png',
      '/images/passenger black.png',
      '/images/cdb1purple.png',
      '/images/lovewhite.png',
      '/images/tiedyeblack.png',
      '/images/remilionavy.png'
    ]


  return (

    <div>

        <div className="product-card">
          <Image
            src={picsArray[index]}
            className="product-image"
            height='300px'
            width='300px'
          />




          <div className="small-images-container">
            {picsArray.map((item, i) => (
              <Image
                key={i}
                src={item}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                height='50px'
                width='50px'
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>


        </div>
    </div>

  )
}

export default Previews
