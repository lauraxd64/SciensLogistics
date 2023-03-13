// FLOTA SCRIPTS ////////////////////////////////////////////////////////////////////////////////////
const transportesacripts = function () {
  if (screen.width > 1024) {
    gsap.to("#imagen_carretera", {
      scrollTrigger: {
        trigger: "#imagen_carretera",
        start: "top 30%",
        end: "bottom 0",
        scrub: .2,
      },
      y: -200,
      ease: "power4.easeInOut",
    });
    ScrollTrigger.create({
      trigger: "#carretera",
      start: "bottom 8%",
      end: "bottom -500%",
      toggleClass: {
        targets: "#logo, nav",
        className: "blue2"
      }
    });
    const playtrans = function () {
      const optionstrans = {
        id: 675499476,
        width: 640,
        controls: false,
        loop: true
      };
      const playertrans = new Vimeo.Player('imagen_carretera', optionstrans, );
      playertrans.setVolume(0);
      playertrans.play().then(function () {
        gsap.to("#imagen_carretera", {
          autoAlpha: .8,
          duration: 1,
        })
      });
    }
    playtrans();
  }
  if (screen.width < 1024) {
    const playtrans = function () {
      const optionstrans = {
        id: 675499476,
        width: 640,
        controls: false,
        loop: true
      };
      const playertrans = new Vimeo.Player('imagen_carretera', optionstrans, );
      playertrans.setVolume(0);
      playertrans.play().then(function () {
        gsap.to("#imagen_carretera", {
          autoAlpha: .8,
          duration: 1,
        })
      });
    }
    playtrans();
	  
	ScrollTrigger.create({
      trigger: "#carretera",
      start: "bottom 5%",
		end: "bottom -500%",
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
transportesacripts();
