const setObjPosition = (obj) => {
    obj.position.x = 1 - window.scrollY / 100;
    obj.position.y = 1 - window.scrollY / 100;
};

class Scroller {
    constructor(obj) {
      setObjPosition(obj)
      window.addEventListener('scroll', () => {
        setObjPosition(obj)
        this.onScroll();
      });
    }

    onScroll() {

    }
  }
  
  export { Scroller };