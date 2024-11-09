"use client"
import Image from "next/image";
import {motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import HeroImage from "./Assets/hero-image.jpg";
import { Header } from "./components/Header";
import { useEffect, useRef } from "react";
import Paragraph from "./components/Paragraph";
import HeaderButton from "./components/HeaderButton";
import Ruthven from "./Assets/ruthven2.jpg"
import CarCard from "./components/CarCard";
import Sprinter from "./Assets/sprinter.png"
import Sclass from "./Assets/s-class.png"
import Luxury from "./Assets/luxury-sedan.png";
import Exec from "./Assets/executive.png";
import Arrow from "./Assets/SVG/arrow-right.svg"
import ArrowLeft from "./Assets/SVG/arrow-left.svg";
import Card from "./components/Card";
import Comfort from "./Assets/SVG/comfort.svg"
import Time from "./Assets/SVG/time.svg"
import World from "./Assets/SVG/world.svg"
import Passenger from "./Assets/passenger.jpg"
import Logo from "./Assets/SVG/power_logo1_whiteRed.svg"
import Footer from "./components/Footer";
import Contact from "./components/Contact";





export default function Home() {
  const spacer = useRef(null)
  
  useEffect(() => {
    const right = document.querySelector(".arrowRight")
    const left = document.querySelector(".arrowLeft")
    const card = document.querySelector(".card-container")
    const cardContainer = document.querySelector(".cards")
    var initial = 0;
    var amount = card.offsetWidth + 20
    var totalLength = amount * 3;

   
    const leftClick = (e) => {


      if (initial != -(totalLength)) {

        initial -= amount
        left.classList.remove("disable")
        if (initial == -(totalLength))
          left.classList.add("disable")
        cardContainer.style.transform = `translateX(${initial}px)`

      }
      else if (initial === -(totalLength))
        left.classList.add("disable")

      right.classList.toggle("disable", initial === 0)
    }
    const rightClick = (e) => {

      if (initial != 0) {
        initial += amount
        left.classList.toggle("disable", initial === (-totalLength))
        if (initial === 0)
          right.classList.add("disable")

        cardContainer.style.transform = `translateX(${initial}px)`

      }
      else if (initial === 0) {
        right.classList.add("disable")
      }
    }

    left.addEventListener('click', leftClick)

    right.addEventListener('click', rightClick)
  }, [])
  const { scrollYProgress } = useScroll({ target: spacer, offset: ["start 30vh", "end start"] })
  useMotionValueEvent(scrollYProgress, "change", (latest) => console.log(latest))
  const scroll = useTransform(scrollYProgress, [0.5, 1], [1, 0])
  const scaleScroll = useTransform(scrollYProgress, [0.6, 1], [1, 0.8])
  return (
    <main>
      <NavBar />
      <div>


        <motion.section style={{ opacity: scroll, scale: scaleScroll }} className="hero w-full sticky top-[-35vh]  min-h-screen pt-32 ">
          <div className=" hero-wrapper text-secondary gap-12 flex flex-col items-center mx-auto h-full w-11/12">
            {/* Hero grid containing the h1 and paragraph */}
            <div className="flex-col flex  gap-4 md:grid md:grid-cols-12">
              <h1 className=" lg:leading-[65%] text-3xl leading-[30%] max-w-[45ch] md:leading-5 md:text-5xl  lg:text-6xl md:col-start-1 md:col-end-9 tracking-tight">
                <Header text="World-Class Luxury Car and Elite Concierge Service" />
              </h1>

              <div className=" flex-col flex gap-4 col-start-9 col-end-13">
                <Paragraph classes="font-semibold text-wrap leading-tight max-w-[32ch] text-sm lg:text-base lg:leading-5  md:max-w-[35ch]" text="A concierge service suited to our clients every need. Passionately delivering to the highest standards while anticipating and facilitating our clients requests." />
                <HeaderButton text="Inquire Now" linkTo="#contact" />
              </div>
            </div>
            {/* Hero Image */}
            <motion.div initial={{ filter: 'blur(4px)' }} whileInView={{ filter: 'blur(0px)' }} transition={{ delay: 1, duration: 0.5, ease: 'easeIn' }} className="imageContainer relative rounded-xl flex items-center justify-center">
              <Image className="heroImage" priority src={HeroImage} fill alt="chaffeur opening a car door" quality={80} sizes="90vw" placeholder="blur" />
            </motion.div>
          </div>
        </motion.section>
        <div ref={spacer} className="spacer -z-10 relative h-screen w-full border-solid border-primary">

        </div>
        <section className="relative about-section lg:p-12 mb-20 md:mb-10 bg-white z-40 w-full min-h-screen md:min-h-[75vh] lg:min-h-[55vh]">
          <div className="flex flex-col justify-center items-center pt-20 w-10/12 mx-auto m-h-full">
            <h1 className="text-2xl leading-7 md:text-4xl mx-auto md:max-w-[30ch] pb-20 text-center">We provide exceptional service for exceptional people<span className="text-primary">.</span></h1>
            <div className="about min-h-full w-full flex gap-8 flex-col md:flex-row md:justify-around ">
              <div>
                <Image className="object-cover ruthven rounded-lg" alt="owner of transportation inc Ruthven Wallace" quality={80} sizes="50vw" src={Ruthven} />
                <div className="text-sm text-center pt-3 md:pt-2">Owner - Ruthven Wallace.</div>
              </div>

              <p className="md:max-w-[45ch] text-[14px] font-normal md:leading-snug md:text-base">We believe that the highest level of luxury comprises the most personalized, thoughtful and seamless service. Our ability to consistently deliver on this promise derives from decades of experience and our steadfast commitment to our clients&apos; needs. We pride ourselves on our ability to always be one step ahead in understanding your needs
                <br></br><br></br>
                Our clientele, encompassing exceptional individuals across the business, music, political and financial fields, trust us to consistently deliver the highest level of service. Our fleets of luxury cars and chauffeur across the United States, the United Kingdom, France, Spain and Italy are available for convenient, reliable and seamless ground travel.</p>
            </div>
          </div>
        </section>


        <section id="fleet" className="Fleet relative pb-10 bg-white overflow-x-clip z-40 w-full min-h-[10vh]">
          <div className="flex flex-col lg:bg-grey rounded-[25px] justify-center items-center lg:p-20 lg:pt-32 w-11/12 mx-auto min-h-full">
            <div className=" flex flex-col lg:grid lg:grid-cols-12 min-h-full">

              <div className="flex mx-auto flex-col  gap-5  min-h-full  md:col-start-1 md:col-end-5">
                <h2 className="text-4xl service-header md:text-6xl mb-3 font-bold">Our Fleet<span className="text-primary">.</span></h2>
                <p className="mb-8 text-base md:text-md max-w-[28ch] md:max-w-[45ch] lg:max-w-[30ch] leading-snug font-semibold">Whether you&apos;re seeking a VIP experience, superior comfort, or the height of luxury, our fleet is equipped to meet your every need and exceed expectations.</p>
                <Button text="Explore Our Rates" linkTo="https://bc1fbalfblo0rsrq.public.blob.vercel-storage.com/POWER%20TRANSPORTATION%20INC%20RATES-%2010.2024-xHUKnpgJ2lkosqpbbvcUEK5CHHYWKM.pdf" />
              </div>


              <div className="flex flex-cards md:pt-10 lg:pt-0 items-start w-[90vw] relative md:col-start-7 lg:col-start-6 md:max-w-[90vw]  md:col-end-12 flex-col">
                <div className="flex cards relative flex-row gap-5 ">
                  <CarCard header='Luxury Sedan' image={Luxury} paragraph='When it comes to transportation, nothing compares to the opulence and sophistication of a luxury sedan.' />
                  <CarCard header='Sprinter' image={Sprinter} paragraph='Equipped with amenities such as entertainment systems, and charging  ensuring an enjoyable ride' />
                  <CarCard header='Mercedes S-Class' image={Sclass} paragraph='With uncompromising luxury, this flagship sedan offers a driving experience that surpasses all expectations.' />
                  <CarCard header='Executive SUV' image={Exec} paragraph='Selecting to travel in an SUV offers more than just luxurious seating and a VIP-like experience; it also prioritizes safety.' />
                </div>
                <div className="flex flex mt-10 mx-auto z-50 row gap-2">

                  {/* Slider Buttons */}
                  <motion.span initial="initial" whileHover="hovered" className='btn arrowLeft cursor-pointer slider inline-block rounded-md md:rounded-lg relative overflow-hidden'>
                    <motion.span variants={{ initial: { x: 30 }, hovered: { x: 0 }, transition: { ease: 'easeInOut', duration: 3 } }} className='absolute overflow-hidden arrowHidden'>
                      <Image alt="arrow icon" src={ArrowLeft} quality={80} width={15} />
                    </motion.span>
                    <motion.span variants={{ initial: { x: 0 }, hovered: { x: -30 }, transition: { ease: 'easeInOut', duration: 1 } }} className='arrow'>
                      <Image alt="arrow icon" src={ArrowLeft} quality={80} width={15} />
                    </motion.span>
                  </motion.span>

                  <motion.span initial="initial" whileHover="hovered" className='btn disable arrowRight cursor-pointer slider inline-block rounded-md md:rounded-lg relative overflow-hidden'>
                    <motion.span variants={{ initial: { x: -30 }, hovered: { x: 0 }, transition: { ease: 'easeInOut', duration: 1 } }} className='absolute overflow-hidden arrowHidden'>
                      <Image alt="arrow icon" src={Arrow} quality={80} width={15} />

                    </motion.span>
                    <motion.span variants={{ initial: { x: 0 }, hovered: { x: 30 }, transition: { ease: 'easeInOut', duration: 1 } }} className='arrow'>
                      <Image alt="arrow icon" src={Arrow} quality={80} width={15} />
                    </motion.span>
                  </motion.span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services mt-28 mb-16 lg:mt-10 w-full min-h-[100vh] md:min-h-[80vh]">
          <div className="h-full flex flex-col justify-between md:justify-evenly items-center mx-auto w-11/12">

            <h2 className=" lg:leading-[65%] text-2xl text-center mb-20 leading-[10%] max-w-[30ch] md:leading-5 md:text-5xl  lg:text-4xl  tracking-tight">
              <Header text="Why settle for less when you can opt for a truly satisfying experience?" />
            </h2>

            <div className="service-grid justify-center mx-auto grid md:grid-cols-3 w-10/12 lg:max-w-[75%] md:w-full grid-rows-max gap-10 min-h-[100%]  ">
              <Card heading="Luxury & Comfort" text="We offer a wide range of luxury vehicles to suit your needs, whether you’re looking for a sedan, SUV, or something in between" svg={Comfort} />
              <Card heading="24 Hour Service" text="With our 24 hour car service, you can rest assured that we'll be there for you whenever you need us" svg={Time} />
              <Card heading="International Service" text="When you need luxury transportation that extends beyond your local area, our international service has you covered" svg={World} />
            </div>

          </div>

        </section>

        <section className="difference min-h-screen pb-16">

          <div className="difference-section w-11/12 min-h-[100vh] mx-auto flex-col lg:grid lg:gap-20 relative grid-cols-12 ">

            <motion.div className="w-full image-wrapper flex top-16 lg:sticky image h-fit col-start-1 col-end-7" initial={{clipPath: "inset(0 100% 0 0)"}} whileInView={{clipPath: "inset(0 0 0 0)"}} viewport={{once: true}} transition={{ duration:1.5, ease:'easeInOut'}}>
              <Image className="rounded-[20px] mx-auto  w-11/12 h-auto rounded-[20px]" alt="passenger riding in the back of the car working on their laptop" src={Passenger} />
            </motion.div>

            <div className="flex flex-col md:items-center pt-10 col-start-7 col-end-13">
              <div className="flex flex-col min-h-[50vh] justify-center text-section">
                <h2 className="text-2xl md:text-3xl mx-auto md:mx-0 md:max-w-fit max-w-[20ch] tracking-tight mb-8">Not <span className="relative inline-block">your average<motion.span className="strike-through" viewport={{once: true}} transition={{ duration:1.5, ease:'easeInOut'}} initial={{width:0}}whileInView={{width:'100%'}}></motion.span></span> concierge service</h2>
                <p className="md:text-lg leading-[125%] max-w-[33ch] mx-auto md:max-w-[45ch] font-normal mb-10">We go beyond opening your doors and greeting you by name. Our drivers are trained to anticipate your personal needs by providing services that will allow you to spend more time on your important business or pressing matters.<br /><br></br>
                  Our concierge drivers anticipate your every need: whether it’s receiving flight information updates, providing tips about New York City or offering assistance in selecting trendy restaurants and hotels.</p>
                {/* <Button text="Request a quote" /> */}
              </div>


             <Contact/>
           
            </div>
          </div>
        </section >

      </div >

      <Footer />


    </main >
  );
}
