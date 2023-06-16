// HOMESCRIPTS ////////////////////////////////////////////////////////////////////////////////////
const homescripts = function () {
  // GSAP panatalla grande
  if (screen.width > 1024) {

    ScrollTrigger.create({
      trigger: "#uno",
      start: "top top",
      end: "bottom -10%",
      scrub: .2,
      //pin: "#textDos",
    });

    gsap.to("#dos", {
      scrollTrigger: {
        pin: '.dos-section',
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


    gsap.to("#tres-content", {
      scrollTrigger: {
        trigger: "#tres",
        pin: "#tres-content",
        scrub: 1,
        //markers:"true",
        start: "top 10%",
        end: "center -20%",
      },
      opacity: 1,
      ease: "power4.easeInOut",
    });

    if (screen.width <= 600) {

      gsap.to("#tres-content", {
        scrollTrigger: {
          trigger: "#tres",
          pin: "#tres-content",
          scrub: 1,
          markers:"true",
          start: "top -10%",
          end: "bottom -25%",
        },
        opacity: 1,
        ease: "power4.easeInOut",
      });
    }

    ScrollTrigger.create({
      trigger: "#tres",
      //markers:true,
      start: "top 40%",
      end: "bottom -105%",
      toggleClass: {
        targets: "#ft-header",
        className: "blue"
      }
    });

    ScrollTrigger.create({
      trigger: "#cuatro",
      start: "top 0",
      end: "top -100%",
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

    ScrollTrigger.create({
      trigger: "#cinco",
      start: "bottom 100%",
      end: "bottom 0%",
      pin: true,
    });
    gsap.to("#clientes-1", {
      scrollTrigger: {
        trigger: "#cinco",
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
        trigger: "#cinco",
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
        trigger: "#cinco",
        start: "bottom 99%",
        end: "bottom 50%",
        scrub: "true",
        //markers: true,
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
        trigger: "#cinco",
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

    ScrollTrigger.create({
      trigger: "#cuatro",
      start: "top 0",
      end: "top -100%",
      pin: true,
      //markers:true,
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

    ScrollTrigger.create({
      trigger: "#dos",
      /*markers:true,*/
      start: "top 40%",
      end: "bottom -105%",
      toggleClass: {
        targets: "#ft-header",
        className: "red"
      }
    });

  
  }
 
}
homescripts();

