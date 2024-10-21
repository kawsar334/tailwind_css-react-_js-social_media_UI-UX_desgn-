import React from 'react'

const Post = ({posts}) => {

    const RenderSkeleton = () => (
        <div className="w-full p-4">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                    <div className="h-[70px]  bg-gray-200 rounded w-3/4"></div>
                    <div className="space-y-2">
                        <div className="h-[70px]  bg-gray-200 rounded"></div>
                        <div className="h-[70px]  bg-gray-200 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
  return (
    <div className=' overflow-y-auto mt-10 w-full  flex flex-col justify-start items-start gap-3 p-4 '>
        {posts.map((item)=>(
            <div className='w-full border p-5 rounded-[10px]'>
                <div className='w-full flex items-start flex-col gap-3 cursor-pointer '>
                    <h1 className='text-3xl font-semibold '>{item?.desc || "Not Found "}</h1>
                    {item?.img && <img src={item?.img} alt="" className='w-[100%] h-[300px] object-cover rounded-[10px]' />}
                   <p className='text-[#555]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo natus autem reiciendis error ullam velit obcaecati quaerat sapiente, unde dignissimos.</p>
                    <div className='flex justify-between gap-5 w-full'>
                        <button className='btn '>likes</button>
                        <button className='btn '>comments</button>
                        <button className='btn '>share</button> 
                    </div>
                </div>
              
            </div>
            
        ))}
       
    </div>
  )
}

export default Post