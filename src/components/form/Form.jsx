import React from 'react'

const Form = () => (
    <div className='form-container '>
        <h1 className='text-[#e74545] text-md mb-4'>Complete the Form to Schedule an Appointment</h1>
        <form className='flex flex-col gap-4'>
            <h2 className='text-[#fff] text-sm'>Country <span>*</span></h2>
            <select name="" id="" className='w-[100%] p-1 border-2 border-solid border-[#fff]' >
                <option value="">Select a Country</option>
                <option value="">two</option>
                <option value="">three</option>
                <option value="">four</option>
                <option value="">five</option>
            </select>
            <div className='flex flex-col '>
                <label htmlFor="" className="text-[#fff] text-sm"> Company Name *</label>
                <input type="text" name="" id="" className='w-[100%] p-1 border-2 border-solid border-[#fff] ' />
            </div>
            <div className='flex flex-col '>
                <label htmlFor="" className="text-[#fff] text-sm"> First Name *</label>
                <input type="text" name="" id="" className='w-[100%] p-1 border-2 border-solid border-[#fff] ' />
            </div>

            <div className='flex flex-col '>
                <label htmlFor="" className="text-[#fff] text-sm"> Last Name *</label>
                <input type="text" name="" id="" className='w-[100%] p-1 border-2 border-solid border-[#fff] ' />
            </div>

            <div className='flex flex-col '>
                <label htmlFor="" className="text-[#fff] text-sm"> Your Work Email *</label>
                <input type="text" name="" id="" className='w-[100%] p-1 border-2 border-solid border-[#fff] ' />
            </div>

            <div className='flex flex-col'>
                <label htmlFor="" className="text-[#fff] text-sm"> Phone Number *</label>
                <input type="text" name="" id="" className='w-[100%] p-1 border-2 border-solid border-[#fff] ' />
            </div>

            <button className="bg-[#f6ba00] rounded-3xl  px-3 h-[2.5rem] w-[50%] mx-auto text-[#000] font-[700]" >Submit</button>
        </form>
    </div>
)

export default Form
