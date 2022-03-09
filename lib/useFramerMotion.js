export const useFramerMotion = () => {

    const Fade = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: .5 } },
    }

    return {
        Fade
    }
}