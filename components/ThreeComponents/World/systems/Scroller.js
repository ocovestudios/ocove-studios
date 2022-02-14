class Scroller {
    constructor(scrollFunctions) {
      for (let i = 0; i < scrollFunctions.length; i++) {
        scrollFunctions[i]()
      }
      window.addEventListener('scroll', () => {
        this.onScroll();
      });
    }

    onScroll() {

    }
  }
  
  export { Scroller };