import React from 'react';

const Skeleton = () => {
    return (
        <div>

            <div className=" p-4 md:w-[100%] transform m-auto flex justify-between items-center mt-4 animate-pulse">
                <div className="w-10  h-10 bg-[#C0C0C0] rounded-[50%] dark:bg-[lightgray]"></div>
                <div className="w-[150px] h-5 bg-[#C0C0C0] rounded dark:bg-[lightgray]"></div>
                <div className='flex justify-center items-center gap-4'>
                    
                    <div className="w-10  h-10 bg-[#C0C0C0] rounded-[50%] dark:bg-[lightgray]"></div>
                    <div className="w-7  h-7 bg-[#C0C0C0] rounded-[50%] dark:bg-[lightgray]"></div>
                    <div className="w-10  h-10 bg-[#C0C0C0] rounded-[50%] dark:bg-[lightgray]"></div>

                </div>
            </div>

        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex items-center mt-4 animate-pulse">
                <div className="flex justify-center items-center gap-5 my-4">
                    <div className="h-2.5 bg-[#C0C0C0] rounded dark:bg-[lightgray] w-[100px]"></div>
                    <div className="h-3 bg-[#C0C0C0] rounded dark:bg-[lightgray] w-[70px]"></div>
                    <div className="h-4 bg-[#C0C0C0] rounded dark:bg-[lightgray] w-[100px]"></div>
                </div>
            </div>
            <div className="w-full md:w-[70%] transform md:translate-x-[-10%] flex items-center mt-4 animate-pulse">
                <svg className="w-10 h-10 me-3 text-[#C0C0C0] dark:text-[lightgray]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                    <div className="w-[300px] md:w-[400px] h-5 bg-[#C0C0C0] rounded-full dark:bg-[lightgray]"></div>
                </div>
            </div>

            <div className="flex justify-between w-[90%] m-auto">
                <div role="status" className="w-full md:w-[60%] p-4 rounded shadow animate-pulse md:p-6 dark:border-[lightgray]">
                    <div className="flex items-center justify-center h-48 mb-4 bg-[#C0C0C0] rounded dark:bg-[lightgray]">
                        <svg className="w-10 h-10 text-[#C0C0C0] dark:text-[#6C6C6C]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        </svg>
                    </div>
                    <div className="h-2.5 bg-[#C0C0C0] rounded-full dark:bg-[lightgray] w-48 mb-4"></div>
                    <div className="h-2 bg-[#C0C0C0] rounded-full dark:bg-[lightgray] mb-2.5"></div>
                    <div className="h-2 bg-[#C0C0C0] rounded-full dark:bg-[lightgray] mb-2.5"></div>
                    <div className="h-2 bg-[#C0C0C0] rounded-full dark:bg-[lightgray]"></div>
                    <div className="flex items-center mt-4">
                        <svg className="w-10 h-10 me-3 text-[#C0C0C0] dark:text-[lightgray]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <div>
                            <div className="h-2.5 bg-[#C0C0C0] rounded-full dark:bg-[lightgray] w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-[#C0C0C0] rounded-full dark:bg-[lightgray]"></div>
                        </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>

                <div role="status" className="hidden w-[40%] md:block ml-10 max-w-sm rounded animate-pulse dark:border-[lightgray]">
                    <div className="h-[20px] bg-[#C0C0C0] rounded dark:bg-[lightgray] w-[250px] mb-4"></div>
                    <div className="h-4 bg-[#C0C0C0] rounded dark:bg-[lightgray] mb-2.5 w-[200px]"></div>
                    <div className="my-8">
                        <div className="h-4 bg-[#C0C0C0] rounded dark:bg-[lightgray] mb-2.5 w-[200px]"></div>
                        <div className="h-2 bg-[#C0C0C0] rounded-full dark:bg-[lightgray] mb-2.5 w-[100px]"></div>
                        <div className="h-3 bg-[#C0C0C0] rounded-full dark:bg-[lightgray] w-[250px] mb-2.5"></div>
                    </div>
                    <div className="my-8">
                        <div className="h-4 bg-[#C0C0C0] rounded dark:bg-[lightgray] mb-2.5 w-[200px]"></div>
                        <div className="h-2 bg-[#C0C0C0] rounded-full dark:bg-[lightgray] mb-2.5 w-[100px]"></div>
                        <div className="h-3 bg-[#C0C0C0] rounded-full dark:bg-[lightgray] w-[250px] mb-2.5"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Skeleton;
