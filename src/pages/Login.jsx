import { Link, useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('token', 'sample-auth-token');
    navigate('/dashboard');
  };

  return (
    <div className='login-page'>
      <Link className='back-to-home' to="/">Home</Link>
      <div className='login-container'>
        <h2 className='login-title'>Login</h2>
        <form className='login-form' onSubmit={handleLogin}>
          <input className='form-input' type="text" placeholder="Username" required/>
          <input className='form-input' type="password" placeholder="Password" required/>
          <button className='submit-button' type="submit" >Masuk</button>
        </form>
      </div>
    </div>
  );
}

export default Login;