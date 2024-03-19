import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import codinggirl from "../../public/images/codinggirl.png";
import Skills from "@/src/components/Home/Skills";
import Layout from "@/src/components/Home/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Education from "@/src/components/Home/Education";
import Experience from "@/src/components/Home/Experience";
import TransitionEffect from "@/src/components/Home/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}> </span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title> Nugget | About Page </title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8  md:grid-cols-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:!col-span-8 ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography{" "}
              </h2>
              <p className=" text-dark font-medium dark:text-light ">
                {" "}
                Hello! Nugget's here, and I have a genuine passion for creating
                captivating digital experiences. As a seasoned web developer, I
                specialize in building websites and mobile apps that are not
                just visually appealing but also intuitive and user-focused.
              </p>

              <p className=" text-dark font-medium dark:text-light mt-5 mb-5">
                Beyond my technical expertise, I also serve as the Customer
                Support Team Lead at a leading streaming platform. This dual
                role has provided me with invaluable insights into user
                behavior, needs, and expectations. Every day, I engage with
                customers, collaborate with my colleagues, and strategize with
                my team to ensure we meet and exceed our performance metrics.
              </p>

              <p className=" text-dark font-medium dark:text-light">
                {" "}
                What drives me is the challenge and excitement of bringing
                clients visions to life in the digital realm. Whether Im deep in
                the code of a new website, refining a mobile app interface, or
                leading my team towards achieving our customer service goals, I
                approach each task with dedication and a commitment to
                excellence.{" "}
              </p>

              <p className=" text-dark font-medium dark:text-light mt-5 mb-5 ">
                {" "}
                I believe in continuous learning and innovation. This mindset
                allows me to stay ahead of industry trends and integrate the
                latest best practices into my work. I am always on the lookout
                for opportunities to collaborate with like-minded professionals
                and organizations.{" "}
              </p>

              <p className=" text-dark font-medium dark:text-light">
                {" "}
                If youre seeking someone who brings a blend of technical
                prowess, user-centric design, and a proactive leadership
                approach, Id love to discuss how I can contribute to your next
                project{" "}
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:!col-span-8  ">
              <div className="absolute top-2 -right-3 -z-10 w-[102%] h-[101%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={codinggirl}
                alt="Codebucks"
                className="w-full h-auto rounded-2xl  "
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between dark:text-light xl:!col-span-8 xl:flex-row xl:items-center md:order-3 sm:flex-row ">
              <div className="flex flex-col items-end justify-center text-dark dark:text-light xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:!text-3xl xs:text-4xl ">
                  <AnimatedNumbers value={100} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center text-dark dark:text-light xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:!text-3xl xs:text-4xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:!text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center text-dark dark:text-light xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:!text-3xl xs:text-4xl ">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  {" "}
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
