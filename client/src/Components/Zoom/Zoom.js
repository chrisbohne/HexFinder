import './Zoom.css';
import {useContext} from 'react';
import { PlaygroundContext } from '../../Contexts/Playground';

function Zoom() {
  const {setZoom, zoom} = useContext(PlaygroundContext)
  function onZoom(level) {
    setZoom(zoom * level)
  }

  return (
    <div className="zoom">
      <svg onClick={() => onZoom(0.8)} className="playground-icon zoom-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="4" fill="#2C3E50"/>
        <rect x="3" y="9" width="14" height="2" rx="1" fill="#ECF0F1"/>
        <rect x="9" y="17" width="14" height="2" rx="1" transform="rotate(-90 9 17)" fill="#ECF0F1"/>
      </svg>
      <svg onClick={() => onZoom(1.25)} className="playground-icon zoom-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="4" fill="#2C3E50"/>
        <rect x="3" y="9" width="14" height="2" rx="1" fill="#ECF0F1"/>
      </svg>
    </div>
  );
}

export default Zoom;
