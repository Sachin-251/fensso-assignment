import Image from 'next/image';
import React from 'react';
import { LuArrowUpRight } from "react-icons/lu";

const cards = [
    {
        title: "Search engine 0ptimization",
        color: "#F3F3F3",
        image: "/assets/01.png"
    },
    {
        title: "Pay-per-click advertising",
        color: "#B9FF66",
        image: "/assets/02.png"
    },
    {
        title: "Social Media Marketing",
        color: "#191A23",
        image: "/assets/03.png"
    },
    {
        title: "Email Marketing",
        color: "#F3F3F3",
        image: "/assets/04.png"
    },
    {
        title: "Content Creation",
        color: "#B9FF66",
        image: "/assets/05.png"
    },
    {
        title: "Analytics and Tracking",
        color: "#191A23",
        image: "/assets/06.png"
    },
]

const Services = () => {

    const Card = ({title, color, image}) => {
        const headingColor = color === '#F3F3F3' ? '#B9FF66' : '#F3F3F3';
        console.log(headingColor)
        return (
            <div className={`bg-[${color}] md:p-14 p-8 flex justify-center items-center gap-4 border border-black rounded-3xl shadow-lg shadow-black`}>
                <div className='w-1/2 h-full flex flex-col justify-between gap-8'>
                    <h3 className={`text-xl font-semibold p-1 rounded-md`}><mark className={`${color === '#F3F3F3' ? 'bg-[#B9FF66]' : 'bg-[#F3F3F3]' } p-1 rounded-md`}>{title}</mark></h3>
                    <div className='flex gap-3 items-center'>
                        <span className={`${color === '#191A23' ? 'bg-white' : 'bg-[#191A23]'} rounded-full p-3`}><LuArrowUpRight size={30} className={`${color === '#191A23' ? 'text-black' : 'text-[#B9FF66]'}`} /></span>
                    </div>
                </div>
                <div className='w-1/2'>
                    <Image src={image} alt={title} width={200} height={200} />
                </div>
            </div>
        )
    }

  return (
    <div className='md:px-8 md:my-20 flex flex-col md:items-start items-center justify-center gap-16'>
        <div className='md:w-[70%] w-full flex flex-col md:flex-row md:gap-10 gap-6 md:justify-start justify-center items-center'>
            <h3 className='bg-[#B9FF66] px-2 py-1 text-2xl rounded-md font-semibold'>Services</h3>
            <p className='text-center md:text-start'>{'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'}</p>
        </div>

        <div className='w-full flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {cards.map((item, index) => (
                    <Card key={index} color={item.color} title={item.title} image={item.image} />
                ))}
            </div>
        </div>

        <div className='p-6 rounded-3xl flex justify-center items-center bg-[#F3F3F3] gap-16'>
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-10'>
                <h3 className='text-3xl font-semibold'>{"Let’s make things happen"}</h3>
                <p className='text-lg md:pr-4'>{"Contact us today to learn more about how our digital marketing services can help your business grow and succeed online"}</p>
                <button className='bg-black text-white rounded-md p-3 md:w-fit'>Get your free proposal</button>
            </div>

            <div className='md:block hidden'>
                <Image src='/assets/proposal.png' alt='proposal' width={300} height={300} />
            </div>
        </div>
    </div>
  )
}

export default Services