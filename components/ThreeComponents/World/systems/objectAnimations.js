const setLightPosition = (obj, multiplier) => {
    obj.position.x = -1;
    obj.position.y = 0;
    obj.position.z = 8 - window.scrollY / multiplier;
};

const setYRotation = (obj, multiplier) => {
    obj.rotation.y = -1.9 + (window.scrollY / multiplier);
};

const setContainerOpacity = (obj, multiplier) => {
    obj.style.opacity = 2 - (window.scrollY / multiplier);
}

export { setLightPosition, setYRotation, setContainerOpacity }