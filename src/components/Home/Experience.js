import React, {useRef} from 'react'

import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon';
import Image from 'next/image';
import msq from '@/public/images/msq.png'


const Details = ({position, company, companyLink, time, address, work, img }) => {
    const ref = useRef(null);

    return  (
    <li ref ={ref} className='my-8 first:mt-0 last:mb-0 w-[80%]  mx-auto flex flex-col items-center justify-between dark:text-light md:w-[80%] '>
    <div className="flex items-center justify-between w-full">
        <div className=''>
            < LiIcon reference ={ref} />
            <motion.div initial={{y: 50}}
            whileInView={{y: 0}}
            transition={{duration: 0.5, type: "spring"}}
            className=''
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position}&nbsp;<a href={companyLink} target='_blank' className='text-primary  dark:text-primaryDark capitalize' >@{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full xs:text-sm'>
                    {work}
                </p>
            </motion.div>
        </div>
    </div>
    </li>
    );
};


const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className='my-64 text-dark'>

        <h2 className='font-bold text-8xl mb-32 w-full text-center text-dark dark:text-light md:text-6xl xs:text-4xl md:mb-16'>
             Experience
        </h2>

        <div ref= {ref} className='w-[75%] mx-auto relative lg:w-[90%] md:!w-full' >

            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-8 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'>   </motion.div>

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 '>
                < Details 
               position= "Customer Support Team Lead" company="MQ"
               companyLink="https://www.msb.com.vn/"
                time = "2021-Present" address="Sacramento, CA"
                work = " As a team lead, I responsed for support our team member working on their tasks, as well as mine. I do QA, answer request support from team member and response for the engagement of the team, attendence of team members and also  Support for my manager to annouce the new update" 
                /> 

                < Details 
               position= "Customer Relationship Specialist" company="MSB"
               companyLink="https://www.msb.com.vn/"
                time = "2020-2021" address="Mountain View, CA"
                work = "Selling multiple bank service. Installing multiple Social Media channels to grow the reach and service of our branch. Providing customer support via phone, emails and sms. Make sure branch reaches the highest satisfaction from customer " />

                < Details 
               position= "Customer Relationship Specialist" company="Manulife Vietnam"
               companyLink="https://www.manulife.com.vn/"
                time = "2020-2021" address="Ha Noi, Viet Nam"
                work = " I sold insurance plan and organised multiples events in the company.  " /> 


                < Details 
               position= "Customer Relationship Specialist" company="B-RISE"
               companyLink="www.google.com"
                time = "2019-2020" address="Ha noi, Viet Nam"
                work = " Making the marketing plan, working directly with clients and the team who responsed for each part of the project" /> 
            </ul>
        </div>
    </div>
  )
}

export default Experience
