import Particles from 'react-tsparticles';

const HomeParticles = () => {
    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    color: {
                        value: "#FFFFF",
                    },
                },
                fullScreen: {
                    enable: false
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 100,
                            duration: 2,
                            opacity: 0.8,
                            size: 30,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 80,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#000000",
                    },
                    links: {
                        color: "#000000",
                        distance: 180,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 1.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.8,
                    },
                    shape: {
                        type: "square",
                    },
                    size: {
                        random: true,
                        value: 5,
                    },
                },
                detectRetina: true,
            }
            } />
    )
}

export default HomeParticles