import React, { useState } from 'react';
// import { posts } from '../data/data';

const Story = ({posts}) => {
    const [image, setImage] = useState(null);
    const [open ,setOpen] = useState(false)
    const handleImage = (img)=>{
        setOpen(true);
        setImage(img);
        console.log(img);
    }
    return (
     
            <div className='w-full flex justify-center items-start gap-5 flex-wrap  '>
            {/* <img src="/images/mee.png" alt="loading..." className=' w-[150px] h-[200px] object-cover rounded ' /> */}
                {posts.map((item) => (
                    <div key={item._id} className='w-[70px] h-[70px] md:w-[100px] lg:w-[150px] md:h-[150px] lg:h-[200px]  relative md:rounded m-1 cursor-pointer flex justify-center items-center rounded-full overflow-hidden  border-[3px] border-[white]'>
                        <div className='w-full h-full' onClick={() => handleImage(item?.img)}>
                        <img src={item?.img} alt="" className=' h-full w-full object-cover rounded ' />
                        <div className=' absolute to-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)]  flex justify-center items-end p-2 z-10'>
                            <h2 className='text-[12px] md:text-[18px] font-bold'>{item.desc.slice(0,8)}...</h2>
                        </div>
                        </div>
                    </div>
                ))}

                {open && <div className='fixed w-full h-full bg-black top-1 left-0 flex justify-center items-start p-10 z-30'>
                <img src={image} alt="" className='w-[100%] md:w-[80%] h-[90vh] object-cover rounded'/>
                </div>}
            </div>
    );
};

export default Story;
