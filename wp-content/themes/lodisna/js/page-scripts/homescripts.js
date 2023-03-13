// HOMESCRIPTS ////////////////////////////////////////////////////////////////////////////////////
const homescripts = function () {
  // GSAP panatalla grande
  if (screen.width > 1024) {
    gsap.to(".arrow", {
      scrollTrigger: {
        trigger: "#uno",
        start: "top top",
        end: "bottom 1%",
        scrub: .2,
      },
      x: innerWidth * 1.05,
      ease: "power4.easeInOut",
      immediateRender: false,
    });
    gsap.to("#start-scroll", {
      scrollTrigger: {
        trigger: "#start-scroll",
        start: "top 70%",
        end: "top 50%",
        scrub: .2,
      },
      autoAlpha: 0,
      ease: "power4.easeInOut",
      immediateRender: false,
    });
    
    const playhome = function () {
      const optionshome = {
        id: 791002342,
        width: 640,
        controls: false,
        loop: true
      };
      const playerhome = new Vimeo.Player('video_pag', optionshome, );
      playerhome.setVolume(0);
      playerhome.play().then(function () {
        gsap.to("#video_pag", {
          autoAlpha: .8,
          duration: 1,
        })
      });
    }
    playhome();
    const stophome = function () {
      const optionshome = {
        id: 791002342,
        width: 640,
        controls: false,
        loop: true
      };
      const playerhome = new Vimeo.Player('video_pag', optionshome, );
      playerhome.destroy();
    }

    ScrollTrigger.create({
      trigger: "#uno",
      start: "top top",
      end: "bottom -10%",
      scrub: .2,
      //pin: "#textDos",
    });

    gsap.to("#textDos", {
      scrollTrigger: {
        trigger: "#dos",
        pin: "#textDos",
        scrub: 1,
        //markers:"true",
        start: "top 10%",
        end: "center -20%",
      },
      opacity: 1,
      ease: "power4.easeInOut",
    });

    gsap.to("#textDos", {
      scrollTrigger: {
        trigger: "#dos",
        scrub: 1,
        //markers:"true",
        start: "top -120%",
        end: "center -145%",
      },
      opacity: 0,
      ease: "power4.easeInOut",
    });

    gsap.to("#tresSection", {
      scrollTrigger: {
        pin: '.tresSection',
        trigger: '#video_pag',
        //markers:true,
        start: "5% 5% ",
        end:"40% -10%",
        scrub: true,
      },
      clipPath:'ellipse(120% 111% at 50% 100%)',
      transformOrigin: "0% 100%",
      ease: Expo.easInOut,
    });

    ScrollTrigger.create({
      trigger: "#dos",
      //markers:true,
      start: "top 40%",
      end: "bottom -105%",
      toggleClass: {
        targets: "#logo, nav",
        className: "blue"
      }
    });
    gsap.from(".line", {
      scrollTrigger: {
        trigger: ".line",
        scrub: 1,
        start: "top 80%",
        end: "top 60%",
      },
      scaleX: 0,
    });

    ScrollTrigger.create({
      trigger: ".line",
      start: "center 62%",
      end: "bottom -130%",
      scrub: .2,
      pin: "#tres",
    });

    gsap.to("#content_logistica", {
      scrollTrigger: {
        trigger: ".line",
        scrub: 1,
        start: "top -10%",
        end: "top -50%",
      },
      autoAlpha: 1,
      immediateRender: false,
    });
    gsap.to("#content_trans", {
      scrollTrigger: {
        trigger: ".line",
        scrub: 1,
        start: "top -10%",
        end: "top -50%",
      },
      autoAlpha: 0,
      immediateRender: false,
    });
    ScrollTrigger.create({
      trigger: "#cuatro",
      //markers: "true",
      start: "top 0",
      end: "top -85%",
      pin: true,
    });
    // Conntador
    var startCount = 0,
      num = {
        var: startCount
      };
    gsap.timeline({
        scrollTrigger: {
          trigger: "#cuatro",
          //markers: "true",
          start: "top 0",
          end: "top -80%",
          scrub: true,
        }
      })
      .to(num, {
        var: 1400,
        duration: 1,
        ease: "none",
        onUpdate: changeNumber
      })

    function changeNumber() {
      kilometrosnum.innerHTML = (num.var).toFixed();
    }
    gsap.to('#dot', {
      scrollTrigger: {
        trigger: "#cuatro",
        start: "top 0",
        end: "top -80%",
        scrub: true,
      },
      rotation: 270,
    });
    gsap.from('.st0', {
      scrollTrigger: {
        trigger: "#cuatro",
        start: "top 0",
        end: "top -80%",
        scrub: true,
      },
      drawSVG: 0,
    });
    // Fin contador
    gsap.to("#tiempo", {
      scrollTrigger: {
        trigger: "#gap",
        start: "bottom -60%",
        end: "bottom -80%",
        scrub: true,
      },
      autoAlpha: 1,
      immediateRender: false,
      ease: "linear",
    });
    ScrollTrigger.create({
      trigger: "#cinco",
      start: "top 0",
      end: "top -130%",
      pin: true,
    });
    gsap.to("#carrusel-imagenes", {
      scrollTrigger: {
        trigger: "#carrusel-imagenes",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      x: -innerWidth * 0.333,
      immediateRender: false,
      ease: "linear",
    });
    gsap.to("#lodisna-grande span", {
      scrollTrigger: {
        trigger: "#carrusel-imagenes",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      x: 0,
      immediateRender: false,
      ease: "linear",
    });
    gsap.to("#numeros_in", {
      scrollTrigger: {
        trigger: "#mark1",
        start: "top -10%",
        end: "top -120%",
        scrub: .2,
      },
      x: -innerWidth * 1.33,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
    gsap.from("#cinco article, #numeros", {
      scrollTrigger: {
        trigger: "#cinco article",
        start: "top 80%",
        end: "top 40%",
        scrub: .2,
      },
      autoAlpha: 0,
      ease: "power2.easeInOut",
    });
    gsap.to("#arrow_3", {
      scrollTrigger: {
        trigger: "#cinco",
        start: "top -10%",
        end: "top -100%",
        scrub: .2,
      },
      x: -innerWidth * 1.3,
      immediateRender: false,
    });
    gsap.to("#arrow_4", {
      scrollTrigger: {
        trigger: "#cinco",
        start: "top -10%",
        end: "top -100%",
        scrub: .2,
      },
      x: -innerWidth * 1.3,
      immediateRender: false,
    });
    gsap.to("#cinco, #gap2", {
      scrollTrigger: {
        trigger: "#cinco",
        start: "top -10",
        end: "top -80%",
        scrub: .2,
      },
      autoAlpha: 0,
      immediateRender: false,
    });
    ScrollTrigger.create({
      trigger: "#apostamos_home",
      start: "top 60%",
      end: "bottom -505%",
      toggleClass: {
        targets: "#logo, nav",
        className: "blue"
      }
    });
    ScrollTrigger.create({
      trigger: "#seis",
      start: "top 0",
      end: "top -120%",
      pin: true,
    });
    
    gsap.to("#seis-inner", {
      scrollTrigger: {
        trigger: "#mark2",
        start: "top -10%",
        end: "top -110%",
        scrub: .2,
      },
      x: innerWidth * 2,
      immediateRender: false,
      ease: "power4.easeInOut",
    });
    ScrollTrigger.create({
      trigger: "#nueve",
      start: "bottom 100%",
      end: "bottom 0%",
      pin: true,
    });
    gsap.to("#clientes-1", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "bottom 100%",
        end: "bottom 0%",
        scrub: .2,
      },
      x: -innerWidth * 1.25,
      immediateRender: false,
      ease: "power4.easeInOut",
    });
    gsap.to("#clientes-2", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "bottom 100%",
        end: "bottom 0%",
        scrub: .2,
      },
      x: 0,
      immediateRender: false,
      ease: "power4.easeInOut",
    });
    gsap.to("#canvas", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "bottom 99%",
        end: "bottom 50%",
        scrub: "true",
        markers: true,
      },
      autoAlpha: 0,
      y: -innerHeight * 0.53,
      immediateRender: false,
      ease: "linear",
    });
    gsap.from("#client-line", {
      scrollTrigger: {
        trigger: "#client-line",
        scrub: 1,
        start: "top 80%",
        end: "top 60%",
      },
      scaleX: 0,
    });
    gsap.to("#clients, #client-line", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "top 20%",
        end: "top 10%",
        scrub: .2,
      },
      autoAlpha: 0,
      immediateRender: false,
      ease: "linear",
    });
    ScrollTrigger.create({
      trigger: "#home-calidad",
      start: "top 0",
      end: "top -100%",
      /*pin: true,*/
    });
/*
    var tl=    
    gsap.timeline({
      scrollTrigger: {
        trigger: "#Services-cards",
        pin:'.Services-cards',
        //markers: "true",
        start: "-798% -505%",
        end: "-780% -600%",
        scrub: 0.02,
      }
    })
    tl.to('.cardServices', {
      scaleY: 1,
      transformOrigin: "0% 100%",
      ease: Expo.easInOut,
      stagger: .4,
    })
    /*.to('.cardServices', {
      clipPath: 'inset(0 0 0 0)',
      markers: "true",
      transformOrigin:"bottom top",
      stagger: 0.1,
      delay: 0.1,
    })
    */
   /*
    gsap.to("#home-calidad, #empresa-calidad-cont", {
      scrollTrigger: {
        trigger: "#home-imagenes",
        start: "top 0",
        end: "top 0",
        scrub: .2,
      },
      autoAlpha: 0,
      ease: "power4.easeInOut",
    });
    gsap.to("#himagen2", {
      scrollTrigger: {
        trigger: "#himagen3",
        start: "top 0",
        end: "bottom 0",
        scrub: .2,
      },
      y: -400,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
    */
    /*gsap.to("#hflecha-imagenes-1", {
      scrollTrigger: {
        trigger: "#hflecha-imagenes-1",
        start: "top 0",
        end: "bottom 0",
        scrub: .2,
      },
      y: -200,
      immediateRender: false,
      ease: "power2.easeInOut",
    });*/
    gsap.to("#home-imagenes", {
      scrollTrigger: {
        trigger: "#home-imagenes",
        start: "bottom 0",
        end: "bottom 0",
        scrub: .2,
      },
      autoAlpha: 0,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
    gsap.to("#imagen5", {
      scrollTrigger: {
        trigger: "#imagen5",
        start: "top 0",
        end: "bottom 0",
        scrub: .2,
      },
      y: -400,
      immediateRender: false,
      ease: "power2.easeInOut",
    });







    //SCROLL IR A...
    const slider = document.querySelector('#mark0');

    var scrollToHere = slider.offsetTop;

    $('#start-scroll').on('click', function () {
      bodyScrollBar.scrollTo(0, scrollToHere, 4000);
      //
    });
// MEDIA ////////////////////////////////////////////////////////////////////////////////////
  }
  if (screen.width < 1024) {
    const playhome = function () {
      const optionshome = {
        id: 791002342,
        width: 640,
        controls: false,
        loop: true
      };
      const playerhome = new Vimeo.Player('video_pag', optionshome, );
      playerhome.setVolume(0);
      playerhome.play().then(function () {
        gsap.to("#video_pag", {
          autoAlpha: .8,
          duration: 1,
        })
      });
    }
    playhome();
    
  ScrollTrigger.create({
    trigger: "#dos",
    start: "top 5%",
    end: "top -10%",
    toggleClass: {
      targets: "#logo, #movil-menu-boton",
      className: "blue"
    }
  });
  gsap.from(".line", {
    scrollTrigger: {
      trigger: ".line",
      scrub: 1,
      start: "top 20%",
      end: "top 20%",
    },
    scaleX: 0,
  });


    ScrollTrigger.create({
      trigger: "#cuatro",
      start: "top 0",
      end: "top -100%",
      pin: true,
    });
    // Conntador
    var startCount = 0,
      num = {
        var: startCount
      };
    gsap.timeline({
        scrollTrigger: {
          trigger: "#cuatro",
          start: "top 0",
          end: "top -80%",
          scrub: true,
        }
      })
      .to(num, {
        var: 1400,
        duration: 1,
        ease: "none",
        onUpdate: changeNumber
      })

    function changeNumber() {
      kilometrosnum.innerHTML = (num.var).toFixed();
    }
    gsap.to('#dot', {
      scrollTrigger: {
        trigger: "#cuatro",
        start: "top 0",
        end: "top -80%",
        scrub: true,
      },
      rotation: 270,
    });
    gsap.from('.st0', {
      scrollTrigger: {
        trigger: "#cuatro",
        start: "top 0",
        end: "top -80%",
        scrub: true,
      },
      drawSVG: 0,
    });
    gsap.to("#tiempo", {
      scrollTrigger: {
        trigger: "#gap",
        start: "bottom -60%",
        end: "bottom -80%",
        scrub: true,
      },
      autoAlpha: 1,
      immediateRender: false,
      ease: "linear",
    });
    // Fin contador
    gsap.to("#carrusel-imagenes", {
      scrollTrigger: {
        trigger: "#carrusel-imagenes",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      x: -innerWidth * 3,
      immediateRender: false,
      ease: "linear",
    });
    gsap.to("#lodisna-grande span", {
      scrollTrigger: {
        trigger: "#carrusel-imagenes",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      x: 0,
      immediateRender: false,
      ease: "linear",
    });
  ScrollTrigger.create({
      trigger: "#cinco",
      start: "top 0",
      end: "top -130%",
      pin: true,
    });
  gsap.to("#numeros_in", {
      scrollTrigger: {
        trigger: "#mark1",
        start: "top -10%",
        end: "top -120%",
        scrub: .2,
      },
      x: -innerWidth * 3.4,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
     gsap.to("#gap2", {
      scrollTrigger: {
        trigger: "#cinco",
        start: "top -10",
        end: "top -80%",
        scrub: .2,
      },
      autoAlpha: 0,
      immediateRender: false,
    });
    ScrollTrigger.create({
      trigger: "#cinco",
      start: "bottom 15%",
    end: "bottom -515%",
      toggleClass: {
        targets: "#logo, #movil-menu-boton",
        className: "blue"
      }
    });
    ScrollTrigger.create({
      trigger: "#siete",
      start: "top 0",
      end: "top -130%",
      pin: true,
    });
  gsap.to("#puntos", {
      scrollTrigger: {
        trigger: "#gap2",
        start: "top -20%",
        end: "top -110%",
        scrub: .2,
      },
      x: -innerWidth * 1.97,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
    gsap.to("#canvas", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "start 75%",
        end: "start -25%",
        scrub: "true"
      },
      y: -innerHeight * 1,
      immediateRender: false,
      ease: "linear",
    });
      gsap.to("#clientes-1", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "start 100%",
        end: "bottom 0%",
        scrub: .2,
      },
      x: -innerWidth * 1.25,
      immediateRender: false,
       ease: "linear",
    });
    gsap.to("#clientes-2", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "start 100%",
        end: "bottom 0%",
        scrub: .2,
      },
      x: 0,
      immediateRender: false,
      ease: "linear",
    });
  gsap.to("#nueve", {
      scrollTrigger: {
        trigger: "#nueve",
        start: "start -15%",
        end: "end 3%",
        scrub: .2,
      },
      autoAlpha: 0,
      immediateRender: false,
      ease: "linear",
    });
      const slider = document.querySelector('#mark0');

    var scrollToHere = slider.offsetTop;

    $('#start-scroll').on('click', function () {
      bodyScrollBar.scrollTo(0, scrollToHere, 5000);
      //
    });  
    
  }
}
homescripts();

/*
if (screen.width > 1024) {
    
  }

  */