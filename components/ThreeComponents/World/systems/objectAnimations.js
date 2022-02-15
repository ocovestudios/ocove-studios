const setLightPosition = (obj, multiplier) => {
    obj.position.x = -1;
    obj.position.y = 0;
    obj.position.z = 8 - window.scrollY / multiplier;
};

const setYRotation = (obj, multiplier) => {
    obj.rotation.y = - .5 - (window.scrollY / multiplier);
};

export { setLightPosition, setYRotation }