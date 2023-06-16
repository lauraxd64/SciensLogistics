// FLOTA SCRIPTS ////////////////////////////////////////////////////////////////////////////////////
const ultimamillascripts = function () {
  if (screen.width > 1024) {
   gsap.to("#imagen_ultimamilla", {
      scrollTrigger: {
        trigger: "#imagen_ultimamilla",
        start: "top 30%",
        end: "bottom 0",
        scrub: .2,
      },
      y: -200,
      ease: "power4.easeInOut",
    });
	   ScrollTrigger.create({
      trigger: "#logistica",
      start: "bottom 8%",
      end: "bottom -600%",
      toggleClass: {
        targets: "#logo, nav",
        className: "blue2"
      }
    });
  }
if (screen.width < 1024) {
	ScrollTrigger.create({
      trigger: "#logistica",
      start: "bottom 5%",
		end: "bottom -900%",
      toggleClass: {
        targets: "#logo, #movil-menu-boton",
        className: "blue"
      }
    });
}
  $('nav .menu-servicios').addClass("active");
  //footer
  gsap.to(".back-fondo", {
    scrollTrigger: {
      trigger: ".backtotop",
      start: "top 100%",
      end: "top 0",
      scrub: .2,
    },
    x: -(innerWidth - innerHeight * 1.78),
    ease: "linear",
  });
	
  gsap.to(".totop", {
    scrollTrigger: {
      trigger: ".backtotop",
      start: "top 50%",
      end: "top 0",
      scrub: .2,
    },
    autoAlpha: 1,
    ease: "linear",
  });
  //
}
ultimamillascripts();
