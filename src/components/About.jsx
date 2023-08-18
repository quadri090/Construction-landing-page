import React from 'react' 

function MisVis(props) {
    return (
        <>
            <div className='w-[320px] md:w-[380px] h-[126px] md:-[166px] flex flex-col justify-between border-[2px] border-my-outline-green rounded-[4px] p-[12px] mx-auto'>
                <div className='flex items-center w-[152px] md:w-[162px] h-[30px] gap-[10px]'>
                    <img src={`/src/img/${props.src}.png`} alt="icon" />
                    <p className='text-[18px] md:text-[20px] font-medium'>{props.misvis}</p>
                </div>
                <div className='h-[48px] md:text-[20px] font-medium leading-[24px] mt-[8px]'>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    )
}

function Leaders(props) {
    return (
        <>
            <div className='w-[180px] h-[273px] text-center'>
                <div className='flex justify-center items-center'>
                    <img src={`/src/img/${props.src}.png`} className='w-[169px] h-[179px]' alt="An image" />
                </div>
                <p className='text-[18px] font-medium mt-[8px]'>{props.name}</p>
                <p className='mt-[] leading-[24px] font-light'>{props.position}</p>
                <div className='flex items-center justify-center gap-[24px] mt-[8px]'>
                    <a href=""><img src="/src/img/twitter.png" alt="" /></a>
                    <a href=""><img src="/src/img/linkedin.png" alt="" /></a>
                </div>
            </div>
        </>
    )
}

export default function About() {
    return (
        <>
            <div className='mt-[50px] font-roboto bg-bg-green' id='about' aria-labelledby='about'>
                <div className=' flex items-center justify-center'>
                    <p className='text-[22px] md:text-[28px] font-medium leading-[30px] '>About Us</p>
                </div>
                <div className='w-[359px] md:w-[1140px] h-[286px] md:h-[126px] flex flex-col md:flex-row justify-between items-center mx-auto mt-[25px]'>
                    <MisVis
                    src='goal'
                    misvis='Our Mission:'
                    desc='Build durable and eco-friendly buildings that will serve generations to come.' />
                    <MisVis
                    src='telescope'
                    misvis='Our Vision:'
                    desc='Being a world class organization that transforms lifes one building at a time.' />
                </div>
                <div className='flex items-center justify-center text-[18px] md:text-[20px] font-medium my-[25px] md:my-[50px] '>
                    <p>Meet our leaders</p>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between w-[359px] md:w-[1128px] h-[869px] md:h-[353px] m-auto pb-[20px]'>
                    <Leaders
                    src='polygon 1'
                    name='Janet Juma'
                    position='CEO and Co-founder' />
                    <Leaders
                    src='polygon 2'
                    name='Hilary Doe'
                    position='Chief Architect' />
                    <Leaders
                    src='polygon 3'
                    name='John James'
                    position='Head of Marketing' />
                </div>
            </div>
        </>
    )
}