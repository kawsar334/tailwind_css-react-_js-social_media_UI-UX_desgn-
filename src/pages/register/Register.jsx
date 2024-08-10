import React from 'react';

const Register = () => {
  return (
    <div className='w-screen h-screen bg-[rgba(0,0,0,0.4)] flex justify-center items-center flex-col'>
      <div className='flex justify-center items-center w-[90%] bg-[white] rounded  md:w-[50%] lg:w-[35%] '>
        <form action="#" className='w-[100%] shadow flex flex-col justify-center items-center gap-3 p-4 '>
          <div className='w-[100%]'>
            <h1 className='text-3xl font-semibold '>Sign Up</h1>
            <p className='text-2xl'>It’s quick and easy.</p>
          </div>
          <div className='w-[100%] flex justify-start items-center gap-1'>
            <input type="text" placeholder='Enter your Name' className='w-[45%] h-[45px] p-3 border outline-none rounded' />
            <input type="text" placeholder='Enter your Name' className='w-[45%] h-[45px] p-3 border outline-none rounded' />
          </div>
          <div className='w-[100%]'>
            <input type="text" placeholder='Enter your Name' className='w-[91%] h-[45px] p-3 border outline-none rounded' />
          </div>
          <div className='w-[100%]'>
            <input type="text" placeholder='Enter your Name' className='w-[91%] h-[45px] p-3 border outline-none rounded' />
          </div>
          <div className='w-[100%] flex flex-col justify-start items-start gap-2'>
            <h1>Birthday</h1>
            <div className='w-full flex justify-between items-start '>
              <select name="" id="" className='w-[30%] p-2 rounded '>
                <option value="jan" selected>jan</option>
                <option value="feb">feb</option>
                <option value="march">march</option>
                <option value="april">april</option>
                <option value="may">may</option>
                <option value="june">june</option>
                <option value="july">july</option>
              </select>
              <select name="" id="" className='w-[30%] p-2 rounded '>
                <option value="jan" selected>jan</option>
                <option value="feb">feb</option>
                <option value="march">march</option>
                <option value="april">april</option>
                <option value="may">may</option>
                <option value="june">june</option>
                <option value="july">july</option>
              </select>
              <select name="" id="" className='w-[30%] p-2 rounded '>
                <option value="jan" selected>jan</option>
                <option value="feb">feb</option>
                <option value="march">march</option>
                <option value="april">april</option>
                <option value="may">may</option>
                <option value="june">june</option>
                <option value="july">july</option>
              </select>
            </div>
          </div>
          <div className='w-[100%] flex flex-col justify-start items-start gap-2'>
            <h1>Birthday</h1>
            <div className='w-full flex justify-between items-start '>
              <label htmlFor="male" className='border  px-2 py-1 rounded flex justify-center items-center'>
                <span className='text-[14px] mr-1'>Female</span>
                <input type="radio" name="female" id="female" className='w-11' />
              </label>
              <label htmlFor="male" className='border  px-2 py-1 rounded flex justify-center items-center'>
                <span className='text-[14px] mr-1'>Female</span>
                <input type="radio" name="female" id="female" className='w-11' />
              </label>
              <label htmlFor="male" className='border  px-2 py-1 rounded flex justify-center items-center'>
                <span className='text-[14px] mr-1'>Female</span>
                <input type="radio" name="female" id="female" className='w-11' />
              </label>
            </div>
          </div>
          <div className='w-[100%]'>
            <p className='text-[12px] mt-2'>People who use our service may have uploaded your contact information to Facebook. <a href="#">Learn more.</a></p>
            <p className='text-[12px] mt-2'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
          </div>
          <div className='w-[100%] flex justify-center items-center'>
            <button className='bg-[#42b72a] w-[90%] h-[40px] rounded text-[white] '>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register