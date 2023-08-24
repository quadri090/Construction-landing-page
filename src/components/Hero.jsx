import React from 'react' 
import Btn from './Btn'

function HeroText(props) {
    return (
        <>
            <div className={`${props.position} absolute h-[24px] md:h-[36px] flex items-center bg-[#3D3D3D] font-bold text-[10px] sm:text-[12px] lg:text-[14px] text-white  px-[20px] rounded-[100px] border-[2px] border-white`}>
                <p className=''>{props.text}</p>
            </div>
        </>
    )
}

export default function Hero() {
    return (
        <>
            <div className='w-full lg:w-[1128px] h-[589px] sm:h-[400px] lg:h-[584px] mx-auto mt-[87px] md:mt-[27px] flex flex-col-reverse md:flex-row justify-between font-roboto' id='home' aria-labelledby='home'>
                <div className='w-[363px] sm:w-[300px] lg:w-[452px] h-[205px] md:h-[256px] flex flex-col gap-[20px] font-medium m-auto '>
                    <p className='text-[28px] lg:text-[48px]'>Building Something?</p>
                    <p className='text-[18px] sm:text-[13px] lg:text-[18px]'>Eco-builders is a team of professional construction workers whose sole mission is to build <span className='text-primary-green'> durable</span> and <br className='hidden sm:flex'/> <span className='text-primary-green'>eco-friendly </span> buildings.</p>
                    <Btn
                    width='w-[93px] md:w-[99px] h-[42px] md:h-[50px] '
                    text='Hire Us' />
                </div>
                <div className='w-[340px] lg:w-[595px] h-[330px] lg:h-[584px] mx-auto md:m-auto'>
                    <img src="/src/img/vector.png" alt="" />
                    <HeroText 
                    text='Superior design'
                    position='top-[110px] sm:top-[140px] lg:top-[140px] left-[45px] sm:left-[400px] lg:left-[700px]'/>
                    <HeroText 
                    text='Budget friendly'
                    position='top-[340px] sm:top-[380px] lg:top-[520px] '/>
                    <HeroText 
                    text='Eco-friendly buildings'
                    position='top-[310px] sm:top-[320px] lg:top-[470px] left-[260px] sm:left-[610px] lg:left-[1110px]'/>
                </div>
            </div>
        </>
    )
}
