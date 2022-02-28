import { motion, useAnimation } from "framer-motion"

const ContactForm = () => {

    const lineVariants = {
        initial: { scaleX: 0 },
        animate: { scaleX: 1, originX: 0, transition: { delay: .15, duration: .25, ease: "easeInOut" } }
    }

    const inputVariants = {
        initial: { y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: .16 } }
    }

    const buttonControls = useAnimation()
    const buttonLineControls = useAnimation()
    const formControls = useAnimation()
    const formLine1Controls = useAnimation()
    const formLine2Controls = useAnimation()
    const formLine3Controls = useAnimation()
    const formInput1Controls = useAnimation()
    const formInput2Controls = useAnimation()
    const formInput3Controls = useAnimation()
    const formButtonFade = useAnimation()

    const sequence = async () => {
        await buttonControls.start({ opacity: 0, transition: { duration: .27 }, transitionEnd: { display: "none" } })
        await buttonLineControls.start({ strokeDashoffset: [0, 820], transition: { duration: 1.3, ease: [0.12, 0, 0.07, 0] } })
        await formControls.start({ display: "flex" })
        await formLine1Controls.start("animate")
        await formLine2Controls.start("animate")
        await formLine3Controls.start("animate")
        await formInput1Controls.start("animate")
        await formInput2Controls.start("animate")
        await formInput3Controls.start("animate")
        return await formButtonFade.start({ opacity: 1 })
    }

    return (
        <div className="form__wrapper">
            <motion.div className="form-button__wrap">
                <motion.button className="form-button" animate={buttonControls} onClick={() => sequence()}>TALK TO US</motion.button>
                <svg className="form-button__line" width="340" height="75" viewBox="0 0 340 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.rect className="form-button__stroke" animate={buttonLineControls} x="1" y="1" width="338" height="72" fill="none" stroke="#323232" stroke-width="2" />
                </svg>
            </motion.div>

            <motion.form className="contact-form" animate={formControls}>
                <motion.div className="contact-form__details">
                    <motion.input animate={formInput1Controls} initial="initial" variants={inputVariants} type='text' placeholder="NAME" />
                    <motion.input animate={formInput2Controls} initial="initial" variants={inputVariants} type='text' placeholder="EMAIL" />
                    <motion.div className="horizontal-line" variants={lineVariants} animate={formLine1Controls} initial="initial"></motion.div>
                    <motion.div className="horizontal-line" variants={lineVariants} animate={formLine2Controls} initial="initial"></motion.div>
                </motion.div>
                <motion.textarea animate={formInput3Controls} initial="initial" variants={inputVariants} type='text' placeholder="MESSAGE" className="contact-form__message" />
                <motion.div className="horizontal-line" variants={lineVariants} animate={formLine3Controls} initial="initial"></motion.div>
                <motion.button animate={formButtonFade} initial={{ opacity: 0 }} className='contact__form-submit'>SEND</motion.button>
            </motion.form>
        </div>
    );
}

export default ContactForm;