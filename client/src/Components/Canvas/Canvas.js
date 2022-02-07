import { useEffect, useRef, useState, useContext } from 'react';
import { PlaygroundContext } from '../../Contexts/Playground';
import {gsap} from 'gsap'

import './Canvas.css';

function Canvas() {
  const ref = useRef(null)

  const {
    zoom,
    vertical,
    horizontal,
    grid,
    startLocation,
    targetLocation,
    pathArr,
    locations,
    map
  } = useContext(PlaygroundContext)

  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [view, setView] = useState('');
  const [start, setStart] = useState('');
  const [target, setTarget] = useState('');
  const [path, setPath] = useState([]);
  const [bubbles, setBubbles] = useState([]);
  const initialViewBox = `${-width/2} ${-height/2} ${width} ${height}`

  useEffect(() => {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
      setView(`${-width/2*zoom + horizontal} ${-height/2*zoom + vertical} ${width*zoom} ${height*zoom}`)
      gsap.to('.main-svg',0.3, {attr: {viewBox: view}, ease: 'linear'})
  }, [zoom, vertical, horizontal, view,height, width])

  useEffect(() => {
    console.log(startLocation, 'start')
    console.log(targetLocation, 'target')
    if (startLocation.length) {
      console.log(startLocation)
      const {x,y} = JSON.parse(startLocation)
      setStart(<svg xmlns="http://www.w3.org/2000/svg" x={x -64} y={y -170} width="32" height="32" fill="#3498db" class="start" viewBox="0 0 4 4">
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg>)
    }

    if(!startLocation.length) {
      setStart('')
    }

    if (targetLocation.length) {
      const {x,y} = JSON.parse(targetLocation)
      setTarget( <svg xmlns="http://www.w3.org/2000/svg" x={x -64} y={y -170} width="32" height="32" fill="#e74c3c" class="start" viewBox="0 0 4 4">
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg>)
    }

    if(!targetLocation.length) {
      setTarget('')
    }
  }, [startLocation, targetLocation])

  useEffect(() => {
    createPath()
    createBubbles()
  },[pathArr])

  function createBubbles() {
    console.log('changed')
    const arr = []
    for (let i = 1; i < pathArr.length -1; i++) {
      arr.push(<svg x={pathArr[i].x} y={pathArr[i].y - 50} class="start">
        <circle r="30" fill="#e67e22"/>
      </svg>)
    }
    setBubbles(arr)
    // for (const el of pathArr) {
    //   arr.push(<svg x={el.x} y={el.y - 50} class="start">
    //     <circle r="30" fill="#2c3e50"/>
    //   </svg>)
    // }
    // setPath(arr);
  }

  function createPath() {
    let string = ''
    for (let i = 0; i < pathArr.length; i++) {
      let substring =''
      if (i === 0) substring = `M ${pathArr[i].x},${pathArr[0].y} `
      else substring = `L ${pathArr[i].x},${pathArr[i].y}`
      console.log(substring)
      string = string += substring
    }
    setPath(<svg class="start" y="-50">
      <path d={string} stroke-width="15" stroke="#e67e22" fill="none" />
    </svg>)
  }



  return (
    <div ref={ref} className="canvas" >
      <svg className="main-svg" viewBox={initialViewBox}>
      {grid}
      {bubbles}
      {path}
      {start}
      {target}
      </svg>
    </div>
  );
}

export default Canvas;



