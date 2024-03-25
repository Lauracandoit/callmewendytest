import React, {useRef} from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon';


const Details = ({type, time, place, info   }) => {
    const ref = useRef(null);

    return  (
        <li ref ={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between dark:text-light mobile:w-[80%]'>
            < LiIcon reference ={ref} />
            <motion.div initial={{y: 50}}
            whileInView={{y: 0}}
            transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className='capitalize font-bold text-2xl dark:text-light mobile:text-xl sm:text-lg'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 sm:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full dark:text-light mobile:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
        );
    };

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-64 text-dark sm:mt-[150px]">
      <h2 className="font-bold text-8xl mb-32 sm:mb-[50px] w-full text-center text-dark dark:text-light tablet:text-6xl mobile:text-4xl sm:!text-2xl ">
        Education
      </h2>

      <div
        ref={ref}
        className="mx-auto relative laptop:w-[90%] tablet:!w-full mobile:!w-full sm:!w-full"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-8 w-[4px] h-full bg-dark origin-top dark:text-light dark:bg-light  mobile:w-[4px] sm:w-[2px] tablet:left-[28px] mobile:left-[35px] sm:left-[20px]"
        >
          {" "}
        </motion.div>

        <ul className="w-full flex flex-col items-start justify-between ml-4 mobile:ml-3 sm:!ml-1 mobile:pl-10 sm:pl-5">
          <Details
            type="Bachelor Of Science In Computer Science "
            time="2023-2025 "
            place="Hanoi University of Science and Technology (HUST) "
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence"
          />
          <Details
            type="Bachelor Of Economics "
            time="2016-2020 "
            place="Massachusetts Institute Of Technology (MIT) "
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence"
          />
          <Details
            type="Bachelor Of Economics "
            time="2016-2020 "
            place=" National Economics University (NEU) "
            info="Relevant courses included Marketing, Customer Satisfaction and Market Structor, Demand,   and Artificial Intelligence"
          />
        </ul>
      </div>
    </div>
  );
}

export default Education
