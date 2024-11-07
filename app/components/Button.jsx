'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Arrow from '../Assets/SVG/arrow-right.svg'
export default function Button({ text }) {
    return (
        <motion.span initial="initial" whileHover="hovered" className='fullBtn relative'><Link href='' className="flex flex-row gap-0.5 items-center">
            <span className='btn cta relative text-white -z-10 rounded-md font-medium font-halenoir md:rounded-lg overflow-hidden'>
                <motion.span className='absolute' variants={{ initial: { y: -30 }, hovered: { y: 0 }, transition: { ease: 'easeInOut', duration: 1 } }}>{text}</motion.span>
                <motion.span variants={{ initial: { y: 0 }, hovered: { y: 30 }, transition: { ease: 'easeInOut', duration: 1 } }}>{text}</motion.span>
            </span>
            <span className='btn cta inline-block -z-10 rounded-md md:rounded-lg relative overflow-hidden'>
                <motion.span variants={{ initial: { x: -30 }, hovered: { x: 0 }, transition: { ease: 'easeInOut', duration: 1 } }} className='absolute overflow-hidden arrowHidden'>
                    <Image alt="arrow icon" src={Arrow} quality={80} width={15} />
                </motion.span>
                <motion.span variants={{ initial: { x: 0 }, hovered: { x: 30 }, transition: { ease: 'easeInOut', duration: 1 } }} className='arrow'>
                    <Image alt="arrow icon" src={Arrow} quality={80} width={15} />
                </motion.span>
            </span>

        </Link>
        </motion.span>
    )
}