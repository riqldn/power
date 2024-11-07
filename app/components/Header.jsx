import { motion } from "framer-motion"
export const Header = ({ text }) => {
    const variants = { initial: { y: 50, opacity: 0 }, inView: { y: 0, opacity: 1 } }
    return (
      <motion.span key={text} initial="initial" whileInView="inView" viewport={{ once: true, margin: "0px 0px 50% 0px" }} transition={{  staggerChildren: 0.02, delayChildren: 0.5}}>
        {text.split(' ').map((value, key) => {
  
          return (<span key={key + 3}><span className="inline-block pt-2 pb-4 md:pb-5 overflow-hidden" key={key}>
            <motion.span className="inline-block" key={key + 1} variants={variants} transition={{duration:0.8 , ease: 'easeInOut'}} >
              {value}
            </motion.span>
          </span>
            <span key={key + 2}> </span>
          </span>
          )
  
  
        })}
      </motion.span>
  
    )
  
  }