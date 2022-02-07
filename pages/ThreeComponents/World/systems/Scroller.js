const setObjPosition = (obj, multiplier) => {
    obj.position.x = window.scrollY / multiplier;
    obj.position.y = window.scrollY / multiplier / 100;
};

class Scroller {
    constructor(obj, multiplier) {
      setObjPosition(obj, multiplier)
      window.addEventListener('scroll', () => {
        setObjPosition(obj, multiplier)
        this.onScroll();
      });
    }

    onScroll() {

    }
  }
  
  export { Scroller };