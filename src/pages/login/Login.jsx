import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/alerts/Alert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dark = false;
  const navigate = useNavigate()


  // Login functionality
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('user', data.id);
        navigate('/home', { state: { message: data.message } });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed.');
        console.log('Error:', errorData);
      }
    } catch (err) {
      setErrorMessage('Failed to connect to the server.');
      console.log('Fetch error:', err);
    }
  };


  useEffect(()=>{
    if(errorMessage){
    let timer=  setTimeout(()=>{
        setErrorMessage("")
      },3000);
      return ()=>{
        clearTimeout(timer)
      }
    }
   
  },[errorMessage])
  return (
    <div className={`login flex flex-col md:flex-row justify-center items-center gap-4 h-[100vh] ${dark ? "text-[lightgray] bg-[black]" : ""}`}>
      <div className="w-full md:w-[45%] flex justify-start items-start flex-col">
        <img className="w-[400px] h-[100px]" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
        <p className="text-2xl w-[80%] m-auto">Connect with friends and the world around you on Facebook.</p>
      </div>
      <div className="w-[80%] md:w-[50%]">
        <form className="w-full md:w-[70%] lg:w-[70%] flex justify-center items-center flex-col gap-5 p-5 rounded shadow" onSubmit={handleSubmit}>
          <div className="w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full h-[50px] px-4 py-3 rounded border outline-none"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              className="w-full h-[50px] px-4 py-3 rounded border outline-none"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="w-full h-[50px] px-4 py-3 rounded border outline-none cursor-pointer bg-[#0866ff] text-2xl text-[white] flex justify-center items-center font-semibold"
            >
              Log In
            </button>
          </div>
          <a href="#" className="text-[#0866ff]">
            Forgot password?
          </a>
          <hr className="w-full h-5" />
          <a
            href="/register"
            className="bg-[#42b72a] px-5 py-3 rounded cursor-pointer text-white text-[20px] hover:bg-[transparent] hover:border hover:text-[#42b72a] capitalize transition-all delay-100 ease-in"
          >
            Create new Account
          </a>
          {errorMessage && <Alert message={errorMessage} type={"error"} clearMessage={()=>setErrorMessage(" ")} />
          }
        </form>
       
      </div>
    </div>
  );
};

export default Login;
