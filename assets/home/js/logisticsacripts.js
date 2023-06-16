// FLOTA SCRIPTS ////////////////////////////////////////////////////////////////////////////////////
const transportesacripts = function () {
  if (screen.width > 1024) {
    gsap.to("#imagen_logistica", {
      scrollTrigger: {
        trigger: "#imagen_logistica",
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
    ScrollTrigger.create({
      trigger: "#warehousing",
      start: "top 0",
      end: "top -200%",
      pin: true,
    });
    gsap.to(".warehousing-item.uno", {
      scrollTrigger: {
        trigger: ".warehousing-item.uno",
        start: "top 20%",
        end: "top 0",
        scrub: .2,
      },
      autoAlpha: 0,
      ease: "power4.easeInOut",
    });
    gsap.to(".warehousing-item.dos", {
      scrollTrigger: {
        trigger: ".warehousing-item.dos",
        start: "top 20%",
        end: "top 0",
        scrub: .2,
      },
      autoAlpha: 0,
      ease: "power4.easeInOut",
    });
    gsap.to(".warehousing-item.tres", {
      scrollTrigger: {
        trigger: ".warehousing-item.tres",
        start: "top 20%",
        end: "top 0",
        scrub: .2,
      },
      autoAlpha: 0,
      ease: "power4.easeInOut",
    });
    gsap.to(".warehousing-item.cuatro", {
      scrollTrigger: {
        trigger: ".warehousing-item.cuatro",
        start: "top 20%",
        end: "top 0",
        scrub: .2,
      },
      autoAlpha: 0,
      ease: "power4.easeInOut",
    });
    gsap.to(".wh1", {
      scrollTrigger: {
        trigger: ".warehousing-item.uno",
        start: "top 60%",
        end: "top 50%",
        scrub: .2,
      },
      autoAlpha: 1,
      ease: "power4.easeInOut",
    });
    gsap.to(".wh2", {
      scrollTrigger: {
        trigger: ".warehousing-item.dos",
        start: "top 60%",
        end: "top 50%",
        scrub: .2,
      },
      autoAlpha: 1,
      ease: "power4.easeInOut",
    });
    gsap.to(".wh3", {
      scrollTrigger: {
        trigger: ".warehousing-item.tres",
        start: "top 60%",
        end: "top 50%",
        scrub: .2,
      },
      autoAlpha: 1,
      ease: "power4.easeInOut",
    });
    gsap.to(".wh4", {
      scrollTrigger: {
        trigger: ".warehousing-item.cuatro",
        start: "top 60%",
        end: "top 50%",
        scrub: .2,
      },
      autoAlpha: 1,
      ease: "power4.easeInOut",
    });
    gsap.to(".wh5", {
      scrollTrigger: {
        trigger: ".warehousing-item.cinco",
        start: "top 60%",
        end: "top 50%",
        scrub: .2,
      },
      autoAlpha: 1,
      ease: "power4.easeInOut",
    });
    gsap.to("#warehousing, #warehousing-items", {
      scrollTrigger: {
        trigger: "#warehousing-items",
        start: "bottom 50%",
        end: "bottom 30%",
        scrub: .2,
      },
      autoAlpha: 0,
      ease: "power4.easeInOut",
    });
    const playlogi = function () {
      const optionslogi = {
        id: 675516767,
        width: 640,
        controls: false,
        loop: true
      };
      const playerlogi = new Vimeo.Player('imagen_logistica', optionslogi, );
      playerlogi.setVolume(0);
      playerlogi.play().then(function () {
        gsap.to("#imagen_logistica", {
          autoAlpha: .8,
          duration: 1,
        })
      });
    }
    playlogi();
    ScrollTrigger.create({
      trigger: "#mercancias",
      start: "top 0",
      end: "top -100%",
      pin: true,
    });
    gsap.to("#mercancias-inferior", {
      scrollTrigger: {
        trigger: "#mercancias",
        start: "top 0",
        end: "top -80%",
        scrub: .2,
      },
      x: -innerWidth * 1.74,
      ease: "power4.easeInOut",
    });
  }
if (screen.width < 1024) {
	const playlogi = function () {
      const optionslogi = {
        id: 675516767,
        width: 640,
        controls: false,
        loop: true
      };
      const playerlogi = new Vimeo.Player('imagen_logistica', optionslogi, );
      playerlogi.setVolume(0);
      playerlogi.play().then(function () {
        gsap.to("#imagen_logistica", {
          autoAlpha: .8,
          duration: 1,
        })
      });
    }
    playlogi();
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
transportesacripts();
