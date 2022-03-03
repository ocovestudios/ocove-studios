const setLightPosition = (obj, multiplier) => {
    obj.position.x = -1;
    obj.position.y = 0;
    obj.position.z = 8 - window.scrollY / multiplier;
};

const setYRotation = (obj, multiplier) => {

    obj.rotation.y = -1.9 + (window.scrollY / multiplier);
};

const setContainerOpacity = (obj, multiplier) => {

    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100

    obj.style.opacity = 1.4 - (scrollPercentage / 100);
}

export { setLightPosition, setYRotation, setContainerOpacity }