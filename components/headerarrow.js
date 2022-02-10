import { motion } from "framer-motion"

const HeaderArrow = () => {
    return (
        <svg width="255" height="10" viewBox="0 0 285 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.line y1="-1" x2="276.27" y2="-1" transform="matrix(1 0 0 -1 0 4)" stroke="black" strokeWidth="2" initial={{ x2: 10, opacity: 0 }} whileInView={{ x2: 276.27, opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut', delay: 1 }} viewport={{ once: true }} />
            <motion.rect width="10" height="10" transform="matrix(1 0 0 -1 275 10)" fill="black" initial={{ x: 10, opacity: 0 }} whileInView={{ x: 276.27, opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut', delay: 1 }} viewport={{ once: true }} />
        </svg>
    )
}

export default HeaderArrow