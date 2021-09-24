import './Hero.css';
import {Link} from 'react-router-dom'
import hero from '../../assets/images/Hero.svg'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-image" style={{backgroundImage:`url(${hero})`}}>
    </div>
    <div className="hero-cta">
      <div>
        <h1>Learn about algorithm the fun way</h1>
        <p>Just some placeholder text and a little bla and even more bla</p>
      </div>
      <div className="cta">
        <button className="main-cta"><Link to="/playground">Play around</Link></button>
        <button className="side-cta"><Link to="/register">Sign Up</Link></button>
      </div>
    </div>
    </div>
  );
}

export default Hero;
