import React from 'react'

const Post = ({posts}) => {
    console.log(posts)
  return (
    <div className=' overflow-y-auto mt-10 w-full  flex flex-col justify-start items-start gap-3 p-4 '>
        {posts.map((item)=>(
            <div className='w-full border p-5 rounded-[10px]'>
                <div className='w-full flex items-start flex-col gap-3 cursor-pointer '>
                    <h1 className='text-3xl font-semibold '>{item?.strMeal || "Not Found "}</h1>
                    {item?.strMealThumb && <img src={item?.strMealThumb} alt="" className='w-[100%] h-[300px] object-cover rounded-[10px]' />}
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