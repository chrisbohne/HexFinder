import createGrid from '../../helpers/grid'
import { useEffect, useRef, useState, useContext } from 'react';
import { PlaygroundContext } from '../../Contexts/Playground';
import {gsap} from 'gsap'

import './Canvas.css';

function Canvas() {
  const rows = 2;
  const cols = 4;
  const ref = useRef(null)

  const {
    zoom,
    vertical,
    horizontal,
    grid,
  } = useContext(PlaygroundContext)

  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [view, setView] = useState('');
  const initialViewBox = `${-width/2} ${-height/2} ${width} ${height}`

  useEffect(() => {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
      setView(`${-width/2*zoom + horizontal} ${-height/2*zoom + vertical} ${width*zoom} ${height*zoom}`)
      gsap.to('.main-svg',0.3, {attr: {viewBox: view}, ease: 'linear'})
  }, [zoom, vertical, horizontal, view,height, width])

  return (
    <div ref={ref} className="canvas" >
      <svg className="main-svg" viewBox={initialViewBox}>
      {grid}
      {/* {console.log(grid.map((el) => el.props.y)[0])} */}
      </svg>
    </div>
  );
}

export default Canvas;



