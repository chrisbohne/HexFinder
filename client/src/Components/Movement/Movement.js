import './Movement.css';
import {useContext} from 'react'
import { PlaygroundContext } from '../../Contexts/Playground';

function Movement() {

  const {vertical, setVertical, horizontal, setHorizontal} = useContext(PlaygroundContext)

  function moveGrid (direction, value) {
    if (direction === 'vertical') setVertical(vertical + value)
    if (direction === 'horizontal') setHorizontal(horizontal + value)
  }

  return (
    <div className="movement">
      <svg onClick={()=> moveGrid('vertical', -100)} className="playground-icon move-up" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" width="20" height="20" rx="4" transform="rotate(90 20 0)" fill="#2C3E50"/>
        <rect width="12" height="2" rx="1" transform="matrix(0 -1 -1 0 11.1405 16)" fill="#ECF0F1"/>
        <rect width="8.28664" height="2" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 10.1405 3.59998)" fill="#ECF0F1"/>
        <rect x="10.1405" y="3.59998" width="8.28664" height="2" rx="1" transform="rotate(45 10.1405 3.59998)" fill="#ECF0F1"/>
      </svg>
      <div className="horizontal-container">
        <svg onClick={()=> moveGrid('horizontal', -200)} className="playground-icon move-left" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="4" fill="#2C3E50"/>
          <rect width="12" height="2" rx="1" transform="matrix(-1 0 0 1 16.4 8.85956)" fill="#ECF0F1"/>
          <rect width="8.28664" height="2" rx="1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 4 9.85956)" fill="#ECF0F1"/>
          <rect x="4" y="9.85956" width="8.28664" height="2" rx="1" transform="rotate(-45 4 9.85956)" fill="#ECF0F1"/>
        </svg>
        <svg onClick={()=> moveGrid('horizontal', 200)} className="playground-icon move-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="4" transform="matrix(-1 0 0 1 20 0)" fill="#2C3E50"/>
          <rect x="4" y="8.85956" width="12" height="2" rx="1" fill="#ECF0F1"/>
          <rect x="16.4" y="9.85956" width="8.28664" height="2" rx="1" transform="rotate(135 16.4 9.85956)" fill="#ECF0F1"/>
          <rect width="8.28664" height="2" rx="1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16.4 9.85956)" fill="#ECF0F1"/>
        </svg>
      </div>
      <svg onClick={()=> moveGrid('vertical', 100)} className="playground-icon move-down" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="20" rx="4" transform="matrix(0 -1 -1 0 20 20)" fill="#2C3E50"/>
        <rect x="11.1405" y="4" width="12" height="2" rx="1" transform="rotate(90 11.1405 4)" fill="#ECF0F1"/>
        <rect x="10.1405" y="16.4" width="8.28664" height="2" rx="1" transform="rotate(-135 10.1405 16.4)" fill="#ECF0F1"/>
        <rect width="8.28664" height="2" rx="1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 10.1405 16.4)" fill="#ECF0F1"/>
      </svg>
    </div>
  );
}

export default Movement;
