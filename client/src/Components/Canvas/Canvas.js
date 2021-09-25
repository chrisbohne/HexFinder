import createGrid from '../../helpers/grid'
import { useEffect, useRef, useState, useContext } from 'react';
import { PlaygroundContext } from '../../Contexts/Playground';
import {gsap} from 'gsap'

import './Canvas.css';

function Canvas() {
  const rows = 2;
  const cols = 4;
  const ref = useRef(null)
  const isInitialMount = useRef(true)
  const {zoom, vertical, horizontal} = useContext(PlaygroundContext)
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [view, setView] = useState('');
  const [initialView, setInitialView] = useState('');
  // const initialViewBox = `${-width/2} ${-height/2} ${width} ${height}`

  useEffect(() => {
      setWidth(ref.current.offsetHeight);
      setHeight(ref.current.offsetHeight);
      setInitialView(`${-width/2} ${-height/2} ${width} ${height}`)
  }, [height, width])

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      setView(`${-width/2*zoom + horizontal} ${-height/2*zoom + vertical} ${width*zoom} ${height*zoom}`)
      gsap.to('.main-svg',0.1, {attr: {viewBox: view}, ease: 'linear'})
    }
  }, [zoom, vertical, horizontal, view])

  const svg = <svg className="main-svg" viewBox={initialView}>
      {createGrid(rows, cols)}
      </svg>

  return (
    <div ref={ref} className="canvas" >
      {svg}
    </div>
  );
}

export default Canvas;



