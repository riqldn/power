import { motion } from "framer-motion"

export default function Paragraph({ text, classes }) {
    const variants = { initial: { y: 30, opacity: 0 }, inView: { y: 0, opacity: 1 } }

    return (
        <motion.p className={classes} initial="initial" whileInView="inView" viewport={{once:true}} transition={{  staggerChildren: 0.02, delayChildren: 0.1}} >
            {text.split(' ').map((value, i) => {
                return (
                    <span key={i *2}>


                        <span key={2* i + 1} className="inline-block overflow-hidden relative">
                            <motion.span className="inline-block" key={i * 3} variants={variants} transition={{duration:0.8 , ease: 'easeInOut'}}>
                                {value}
                            </motion.span>
                        </span>
                        <span key={i}> </span>
                    </span>
                )
            })}
        </motion.p>
    )
}
