import React from 'react'
import Btn from './Btn'

function InputArea(props) {
    return (
        <>
            <div className='w-[339px] md:w-[662px] mx-auto border-[2px] border-primary-green rounded-[4px] text-[16px] font-normal leading-[24px]'>
                <input type={`${props.type}`} placeholder={`${props.placeholder}`} className={`${props.properties} p-[10px] w-full outline-none`} />
            </div>
        </>
    )
}

export default function Contact() {
    return(
        <>
            <div className='w-[359px] md:w-[662px] h-[443px] md:h-[458px] flex flex-col gap-[25px] items-center justify-center mx-auto md:mt-[100px] font-roboto' id='contact' aria-labelledby='contact'>
                <h3 className='text-[22px] md:text-[28px] font-medium leading-[30px]'>Let's talk</h3>
                <div className='flex flex-col gap-[40px] items-center justify-center'>
                    <InputArea 
                    type='email'
                    properties='h-[44px]'
                    placeholder='Enter your email'/>
                    <InputArea 
                    type='text'
                    properties='h-[44px]'
                    placeholder='Enter your full name'/>
                    <InputArea 
                    type='text'
                    properties='h-[120px] '
                    placeholder='Enter message'/>
                </div>
                <Btn
                width='w-[164px]'
                text='Send Message' />
            </div>
        </>
    )
}