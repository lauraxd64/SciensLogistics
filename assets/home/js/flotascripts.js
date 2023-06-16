// FLOTA SCRIPTS ////////////////////////////////////////////////////////////////////////////////////
const flotascripts = function () {
  if (screen.width > 1024) {
    const playflota = function () {
      const optionsflota = {
        id: 675843572,
        width: 640,
        controls: false,
        loop: true
      };
      const playerflota = new Vimeo.Player('video-flota', optionsflota, );
      playerflota.setVolume(0);
      playerflota.play().then(function () {
        gsap.to("#video-flota", {
          autoAlpha: .8,
          duration: 1,
        })
      });
    }
    playflota();
    ScrollTrigger.create({
      trigger: "#fondo-flota",
      start: "top 0",
      end: "top -220%",
      pin: true,
    });
    gsap.to("#fondo-flota", {
      scrollTrigger: {
        trigger: "#flota",
        start: "top -30%",
        end: "top -100%",
        scrub: .2,
      },
      autoAlpha: 1,
      immediateRender: false,
      ease: "linear",
    });
    ScrollTrigger.create({
      trigger: "#flota",
      start: "top -50%",
      end: "bottom -130%",
      toggleClass: {
        targets: "#logo, nav",
        className: "blue22"
      }
    });
    gsap.to("#fondo-flota", {
      scrollTrigger: {
        trigger: "#mark-flota-1",
        start: "top 160%",
        end: "top 130%",
        scrub: .2,
      },
      autoAlpha: 0,
      immediateRender: false,
      ease: "linear",
    });
    gsap.to("#flechas-flota", {
      scrollTrigger: {
        trigger: "#mark-flota-1",
        start: "top 200%",
        end: "top 100%",
        scrub: .2,
      },
      x: innerWidth * 0.71,
      immediateRender: false,
      ease: "linear",
    });
    gsap.to("#investiga h2, #investiga article", {
      scrollTrigger: {
        trigger: "#investiga h2, #investiga article",
        start: "top 10%",
        end: "top -30%",
        scrub: .2,
      },
      autoAlpha: 0,
      immediateRender: false,
      ease: "linear",
    });
    gsap.to("#localiza h2, #localiza article", {
      scrollTrigger: {
        trigger: "#localiza h2",
        start: "top 10%",
        end: "top -30%",
        scrub: .2,
      },
      autoAlpha: 0,
      immediateRender: false,
      ease: "linear",
    });
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
  if (screen.width < 1024) {
    const playflota = function () {
      const optionsflota = {
        id: 675843572,
        width: 640,
        controls: false,
        loop: true
      };
      const playerflota = new Vimeo.Player('video-flota', optionsflota, );
      playerflota.setVolume(0);
      playerflota.play().then(function () {
        gsap.to("#video-flota", {
          autoAlpha: .8,
          duration: 1,
        })
      });
    }
    playflota();
	 gsap.to("#video-flota", {
      scrollTrigger: {
        trigger: "#video-flota",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      scale: 1.5,
      ease: "linear",
    });
	  
	    ScrollTrigger.create({
      trigger: "#fondo-flota",
      start: "top 5%",
      end: "top -95%",
      toggleClass: {
        targets: "#logo, #movil-menu-boton",
        className: "blue22"
      }
    });

  }
  $('nav .link-flota').addClass("active");
}
flotascripts();
$('header nav, #logo, #movil-menu-boton').addClass("blue");
