import './Register.css';

function Register() {
  return (
    <div className="register">
      <div className="form-container">
        <form>
          <input type="text" name="name" placeholder="Username" />
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="password" name="password-repeat" placeholder="Confirm Password" />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}

export default Register;
