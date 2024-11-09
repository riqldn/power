'use client'
import Image
    from 'next/image'
import Logo from '../Assets/SVG/power_logo1-blackRed.svg'
import MobileLogo from '../Assets/SVG/power_logo1_whiteRed.svg'
import Arrow from '../Assets/SVG/arrow-right.svg'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { motion, useAnimate, stagger, useMotionValue } from 'framer-motion'
export default function NavBar() {

    const [scope, animateLinks] = useAnimate()
    const [isActive, setToggle] = useState(false)
    const linkVariant = {
        initial: { opacity: 0 }
    }

    useEffect(() => {
        let previousScroll = window.scrollY
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            const nav = document.querySelector('.nav')
            if (window.innerWidth > 768 && currentScroll < previousScroll) {
                nav.classList.add("showNav")
                nav.classList.remove("hideNav")
            }
            else if (window.innerWidth > 768 && currentScroll > previousScroll) {
                nav.classList.add("hideNav");
                nav.classList.remove("showNav");
            }
            previousScroll = window.scrollY
        })


    }, [])
    return (

        <nav className='nav w-full fixed z-50 backdrop-blur-sm top-0 left-0 font-halenoir nav-bg'>
            <div className="w-11/12 mx-auto flex justify-between flex-row py-4  md:py-4 ">
                <Image alt='Power Transportation Inc Logo' src={Logo} quality={80} width={120} />
                {/* Navbar for desktop */}
                <div className='hidden md:flex active justify-center gap-20 px-5 text-4xl absolute top-0 left-0 md:items-center md:h-auto md:w-auto md:relative border-red-500 md:text-lg font-halenoir font-semibold md:gap-14 flex-col md:active md:flex-row md:justify-between' >
                    <motion.span initial="initial" whileHover="hovered"><Link href='/' className='overflow-hidden relative flex'>
                        <motion.span variants={{ initial: { y: 0 }, hovered: { y: 30 }, transition: { ease: 'easeInOut', duration: 1 } }} className='inline-block'>Home</motion.span>
                        <motion.span variants={{ initial: { y: -30 }, hovered: { y: 0 }, transition: { ease: 'easeInOut', duration: 1 } }} className='inline-block absolute'>Home</motion.span>
                    </Link></motion.span>

                    <motion.span initial="initial" whileHover="hovered"><Link href='#fleet' className='overflow-hidden relative flex'>
                        <motion.span variants={{ initial: { y: 0 }, hovered: { y: 30 }, transition: { ease: 'easeInOut', duration: 1 } }} className='inline-block'>Fleet</motion.span>
                        <motion.span variants={{ initial: { y: -30 }, hovered: { y: 0 }, transition: { ease: 'easeInOut', duration: 1 } }} className='inline-block absolute'>Fleet</motion.span>
                    </Link></motion.span>

                    <motion.span initial="initial" whileHover="hovered"><Link href='https://bc1fbalfblo0rsrq.public.blob.vercel-storage.com/POWER%20TRANSPORTATION%20INC%20RATES-%2010.2024-xHUKnpgJ2lkosqpbbvcUEK5CHHYWKM.pdf' className='overflow-hidden relative flex'>
                        <motion.span variants={{ initial: { y: 0 }, hovered: { y: 30 }, transition: { ease: 'easeInOut', duration: 1 } }} className='inline-block'>Rates</motion.span>
                        <motion.span variants={{ initial: { y: -30 }, hovered: { y: 0 }, transition: { ease: 'easeInOut', duration: 1 } }} className='inline-block absolute'>Rates</motion.span>
                    </Link></motion.span>

                    <motion.span initial="initial" whileHover="hovered" className='text-white fullBtn'><Link className="flex flex-row font-normal gap-0.5 items-center" href='#contact'>
                        <span className='btn relative rounded-lg overflow-hidden'>
                            <motion.span variants={{ initial: { y: -30 }, hovered: { y: 0 }, transition: { ease: 'easeInOut', duration: 1 } }} aria-hidden="true" className='btnTxtHidden inline-block absolute'>Contact</motion.span>
                            <motion.span variants={{ initial: { y: 0 }, hovered: { y: 30 }, transition: { ease: 'easeInOut', duration: 1 } }} className='btnTxt inline-block'>Contact</motion.span>
                        </span>
                        <span className='btn inline-block rounded-lg relative overflow-hidden'>
                            <motion.span while variants={{ initial: { x: -30 }, hovered: { x: 0 }, transition: { ease: 'easeInOut', duration: 1 } }} className='absolute overflow-hidden arrowHidden'>
                                <Image alt="arrow icon" src={Arrow} quality={80} width={15} />
                            </motion.span>
                            <motion.span variants={{ initial: { x: 0 }, hovered: { x: 30 }, transition: { ease: 'easeInOut', duration: 1 } }} className='arrow'>
                                <Image alt="arrow icon" src={Arrow} quality={80} width={15} />
                            </motion.span>
                        </span>
                    </Link></motion.span>
                </div>

                {/*Hamburger Menu for Mobile Menu*/}
                <div onClick={() => { setToggle(!isActive); animateLinks("span", isActive ? { opacity: 0 } : { opacity: 1 }, { duration: 0.2, delay: stagger(0.1), ease: 'linear' }) }} className='hamburger-menu flex z-50 flex-col items-center justify-evenly size-10 bg-primary p-1 rounded-lg md:hidden'>
                    <div className={isActive ? 'lines active ' : 'lines'}></div>
                    <div className={isActive ? 'lines active ' : 'lines'}></div>
                    <div className={isActive ? 'lines active ' : 'lines'}></div>
                </div>
            </div >
            {/*Mobile Navigation*/}
            <div ref={scope} className={isActive ? 'mobile-menu z-40 active md:hidden' : 'mobile-menu z-40 md:hidden'}>
                <motion.span onClick={() => setToggle(!isActive)} variants={linkVariant} initial="initial"><Link href='/'>Home</Link></motion.span>
                <motion.span onClick={() => setToggle(!isActive)} variants={linkVariant} initial="initial"><Link href='#fleet'>Fleet</Link></motion.span>
                <motion.span onClick={() => setToggle(!isActive)} variants={linkVariant} initial="initial"><Link href='https://bc1fbalfblo0rsrq.public.blob.vercel-storage.com/POWER%20TRANSPORTATION%20INC%20RATES-%2010.2024-xHUKnpgJ2lkosqpbbvcUEK5CHHYWKM.pdf'>Rates</Link></motion.span>
                <motion.span onClick={() => setToggle(!isActive)} variants={linkVariant} initial="initial"><Link href='#contact'>Contact</Link></motion.span>

                <div className="translate-y-36 text-sm w-full pt-8 gap-4 text-left flex flex-col text-white">
                    <div className='h-[1px] w-[97%] translate-x-[-5px] mx-auto bg-white'></div>
                    <Image src={MobileLogo} alt="power transportation logo" width={100} />
                    <Link className="underline" href='mailto:sadeprithwie@powertransportation-inc.com'>sadeprithwie@powertransportation-inc.com</Link>
                    <Link href='tel:+15163516067' >Office: +1 (516)-351-6067</Link>
                    <Link href='tel:+15169247760' >Office: +1 (516)-924-7760</Link>


                </div>
                <div className=''><div></div></div>
            </div>
        </nav >
    )
}
