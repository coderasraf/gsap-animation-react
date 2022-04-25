import React, {useRef, useEffect} from 'react';
import {gsap, Power3 } from 'gsap';
import People from './image/image.jpg';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

import { TimelineLite, Power2 } from 'gsap';

function App() {

  let container = useRef(null);
  let image = useRef(null);
  let imageRevel = CSSRulePlugin.getRule('.image_wrapper::after')

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, {css:{visibility:"visible"}})
    .to(imageRevel, 1.4, {width: '0%', ease: Power2.easeInOut})
    .from(image, 1.4, {scale: 1.6, ease:Power2.easeInOut, delay: -1.6})
  });

  return (
    <div className="main">
      <div ref={el => container = el} className='container'>
        <>
        <div className='image_wrapper'>
          <img ref={el => image = el} src={ People } />
        </div>
        </>
      </div>
    </div>
  );
}

export default App;
