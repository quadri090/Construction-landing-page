import React from 'react' 
import Btn from './Btn'

export default function Hero() {
    return (
        <>
            <div className='w-full md:w-[1128px] h-[553px] md:h-[584px] mx-auto mt-[87px] md:mt-[27px] flex flex-col-reverse md:flex-row gap-[18px]'>
                <div className='w-[363px] md:w-[452px] h-[205px] md:h-[256px] flex flex-col gap-[20px] font-roboto font-medium m-auto'>
                    <p className='text-[28px] md:text-[48px]'>Building Something?</p>
                    <p className='text-[18px]'>Eco-builders is a team of professional construction workers whose sole mission is to build durable and eco-friendly buildings.</p>
                    <Btn
                    width='w-[93px] md:w-[99px] h-[42px] md:h-[50px] '
                    text='Hire Us' />
                </div>
                <div className='w-[369px] md:w-[595px] h-[330px] md:h-[584px] mx-auto md:m-auto'>
                    <img src="/src/img/vector.png" alt="" />
                </div>
            </div>
        </>
    )
}