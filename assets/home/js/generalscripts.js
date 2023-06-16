gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
// Setup ////////////////////////////////////////////////////////////////////////////////////

const scroller = document.querySelector('.scroller');
const bodyScrollBar = Scrollbar.init(scroller, {
  damping: 0.05,
  thumbMinSize: 20,
  delegateTo: document,
  alwaysShowTracks: true,
renderByPixels: true,
})
ScrollTrigger.scrollerProxy(".scroller", {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});
bodyScrollBar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({
  scroller: scroller
});


/*Header - Menu*/
gsap.registerPlugin(ScrollTrigger);
gsap.to("#ft-header", { display: "none", opacity: 1 });
ScrollTrigger.create({
  trigger: "#ft-header",
  start: 'top -20%',
  /*markers:"false",*/
  end: 99999,
  onUpdate: self => {
    gsap.to("#ft-header", { display: "none", opacity: 1 });
    let { direction } = self;
    /*if (direction == -1) {
      gsap.to('#nav-menu', { duration: 1, autoAlpha: 0, y: -40, backgroundColor: '#4a5bcf', ease: 'sine' });
    } else*/ 
    if (direction == 1) {
      //gsap.to('#nav-menu', { duration: 1, autoAlpha: 1, y: 0, ease: 'sine' });
      gsap.to("#ft-header", { display: "block", opacity: 1 });
    }
  }
});
