import './Login.css';
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="login">
      <div className="form-container">
        <form>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Login" />
          <p className="small">Not registered? <span className="small-cta"><Link to="/register">Create a new account</Link></span></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
