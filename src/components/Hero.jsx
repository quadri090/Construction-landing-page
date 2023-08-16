import React from 'react' 
import Btn from './Btn'

function HeroText(props) {
    return (
        <>
            <div className={`${props.position} absolute h-[24px] md:h-[36px] flex items-center bg-[#3D3D3D] font-bold text-[10px] md:text-[14px] text-white  px-[20px] rounded-[100px] border-[2px] border-white`}>
                <p className=''>{props.text}</p>
            </div>
        </>
    )
}

export default function Hero() {
    return (
        <>
            <div className='w-full md:w-[1128px] h-[589px] md:h-[584px] mx-auto mt-[87px] md:mt-[27px] flex flex-col-reverse md:flex-row justify-between font-roboto'>
                <div className='w-[363px] md:w-[452px] h-[205px] md:h-[256px] flex flex-col gap-[20px] font-medium m-auto'>
                    <p className='text-[28px] md:text-[48px]'>Building Something?</p>
                    <p className='text-[18px]'>Eco-builders is a team of professional construction workers whose sole mission is to build durable and <br/> eco-friendly buildings.</p>
                    <Btn
                    width='w-[93px] md:w-[99px] h-[42px] md:h-[50px] '
                    text='Hire Us' />
                </div>
                <div className='w-[369px] md:w-[595px] h-[330px] md:h-[584px] mx-auto md:m-auto'>
                    <img src="/src/img/vector.png" alt="" />
                    <HeroText 
                    text='Superior design'
                    position='top-[120px] md:top-[140px] left-[45px] md:left-[700px]'/>
                    <HeroText 
                    text='Budget friendly'
                    position='top-[360px] md:top-[520px]'/>
                    <HeroText 
                    text='Eco-friendly buildings'
                    position='top-[330px] md:top-[470px] left-[260px] md:left-[1110px]'/>
                </div>
            </div>
        </>
    )
}