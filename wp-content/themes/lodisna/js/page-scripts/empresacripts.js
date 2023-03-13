// COMPANY CRIPTS ////////////////////////////////////////////////////////////////////////////////////
const companyscripts = function () {
  // GSAP panatalla grande
  if (screen.width > 1024) {
    gsap.to("#empresa h2, #empresa article", {
      scrollTrigger: {
        trigger: "#empresa h2",
        start: "top 10%",
        end: "top -30%",
        scrub: .2,
      },
      autoAlpha: 0,
      ease: "power4.easeInOut",
    });
    gsap.to("#imagen1", {
      scrollTrigger: {
        trigger: "#imagen1",
        start: "top 30%",
        end: "bottom 0",
        scrub: .2,
      },
      y: -200,
      ease: "power4.easeInOut",
    });
    ScrollTrigger.create({
      trigger: "#timeline",
      start: "top 0",
      end: "top -80%",
      pin: true,
    });
    gsap.to(".timeline-item", {
      scrollTrigger: {
        trigger: "#timeline",
        start: "top 0",
        end: "top -80%",
        scrub: .2,
      },
      autoAlpha: 1,
      stagger: .1,
      ease: "power4.easeInOut",
    });
    gsap.to(".arrow", {
      scrollTrigger: {
        trigger: "#timeline",
        start: "top 0",
        end: "top -100%",
        scrub: .2,
      },
      x: innerWidth * 1.2,
      ease: "power4.easeInOut",
    });
    gsap.to("#timeline", {
      scrollTrigger: {
        trigger: "#timeline",
        start: "top -10%",
        end: "top -20%",
        scrub: .2,
      },
      autoAlpha: 0,
      stagger: .1,
      ease: "power4.easeInOut",
    });
    gsap.to("#timeline .tag", {
      scrollTrigger: {
        trigger: "#empresa h2",
        start: "top -20%",
        end: "top -40%",
        scrub: .2,
      },
      autoAlpha: 1,
      ease: "power4.easeInOut",
    });
    ScrollTrigger.create({
      trigger: "#actualidad",
      start: "top 0",
      end: "top -100%",
      pin: true,
    });
    gsap.to("#actualidad .tag", {
      scrollTrigger: {
        trigger: "#actualidad .tag",
        start: "top 60%",
        end: "top 40%",
        scrub: .2,
      },
      autoAlpha: 1,
      ease: "power4.easeInOut",
    });
    gsap.to("#numeros", {
      scrollTrigger: {
        trigger: "#actualidad .tag",
        start: "top 50%",
        end: "top 30%",
        scrub: .2,
      },
      autoAlpha: 1,
      ease: "power4.easeInOut",
    });
    gsap.to("#numeros_in", {
      scrollTrigger: {
        trigger: "#mark-num",
        start: "top 70%",
        end: "top -10%",
        scrub: .2,
      },
      x: -innerWidth * 1.33,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
    gsap.to("#actualidad", {
      scrollTrigger: {
        trigger: "#actualidad",
        start: "top -10%",
        end: "top -30%",
        scrub: .2,
      },
      autoAlpha: 0,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
    gsap.from("#equipo-img", {
      scrollTrigger: {
        trigger: "#equipo-img",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      y: 400,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
    gsap.to("#valores-inner", {
      scrollTrigger: {
        trigger: "#valores-inner",
        start: "top 98%",
        end: "top -20%",
        scrub: .2,
      },
      x: -innerWidth * .86,
      immediateRender: false,
    });
	  const playempresa = function () {
      const optionsempresa = {
        id: 674828005,
        width: 640,
        controls: false,
        loop: true
      };
      const playerempresa = new Vimeo.Player('eficiencia', optionsempresa, );
      playerempresa.setVolume(0);
      playerempresa.play();
    }
	playempresa();
    ScrollTrigger.create({
      trigger: "#eficiencia",
      start: "top 0",
      end: "top -100%",
      pin: true,
    });

    ScrollTrigger.create({
      trigger: "#eficiencia",
      start: "top 8%",
      end: "bottom -92%",
      toggleClass: {
        targets: "#logo, nav",
        className: "blue22"
      }
    });
    gsap.to("#eficiencia .contenido-dos .info", {
      scrollTrigger: {
        trigger: "#mark-efic",
        start: "top 60%",
        end: "top 30%",
        scrub: .2,
        stagger: .1,
      },
      autoAlpha: 1,
      stagger: .1,
      ease: "power4.easeInOut",
    });
    gsap.to("#eficiencia .contenido-uno", {
      scrollTrigger: {
        trigger: "#mark-efic",
        start: "top 70%",
        end: "top 60%",
        scrub: .2,
      },
      autoAlpha: 0,
      stagger: .1,
      ease: "power4.easeInOut",
    });
    ScrollTrigger.create({
      trigger: "#empresa-calidad",
      start: "top 0",
      end: "top -130%",
      pin: true,
    });
    gsap.to("#empresa-calidad, #empresa-calidad-cont", {
      scrollTrigger: {
        trigger: "#empresa-imagenes",
        start: "top 60%",
        end: "top 40%",
        scrub: .2,
      },
      autoAlpha: 0,
      ease: "power4.easeInOut",
    });
    gsap.to("#imagen2", {
      scrollTrigger: {
        trigger: "#imagen3",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      y: -400,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
    gsap.to("#flecha-imagenes-1", {
      scrollTrigger: {
        trigger: "#flecha-imagenes-1",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      y: -200,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
    gsap.to("#empresa-imagenes", {
      scrollTrigger: {
        trigger: "#empresa-imagenes",
        start: "bottom 40%",
        end: "bottom 20%",
        scrub: .2,
      },
      autoAlpha: 0,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
	  gsap.to("#imagen5", {
      scrollTrigger: {
        trigger: "#imagen5",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      y: -400,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
  }
if (screen.width < 1024) {
	ScrollTrigger.create({
      trigger: "#timeline",
      start: "top 35%",
      end: "top -100%",
      pin: true,
    });
    gsap.to("#todos", {
      scrollTrigger: {
        trigger: "#timeline",
        start: "top 35%",
      	end: "top -100%",
        scrub: .2,
      },
      x: -innerWidth*1.96,
      ease: "power4.easeInOut",
    });
	ScrollTrigger.create({
      trigger: "#actualidad",
      start: "top 0%",
      end: "top -150%",
      pin: true,
    });
    gsap.to("#numeros_in", {
      scrollTrigger: {
        trigger: "#actualidad",
      	start: "top 0%",
      	end: "top -150%",
        scrub: .2,
      },
      x: -innerWidth*3.94,
      ease: "power4.easeInOut",
    });
	gsap.to("#valores-inner", {
      scrollTrigger: {
        trigger: "#valores-inner",
      	start: "top 100%",
      	end: "bottom 0",
        scrub: .2,
      },
      x: -innerWidth*4.61,
      ease: "linear",
    });
	 const playempresa = function () {
      const optionsempresa = {
        id: 674828005,
        width: 640,
        controls: false,
        loop: true
      };
      const playerempresa = new Vimeo.Player('eficiencia', optionsempresa, );
      playerempresa.setVolume(0);
      playerempresa.play();
    }
	playempresa();
    ScrollTrigger.create({
      trigger: "#eficiencia",
      start: "top 0",
      end: "top -100%",
      pin: true,
    });
	    ScrollTrigger.create({
      trigger: "#eficiencia",
      start: "top 5%",
      end: "bottom -92%",
      toggleClass: {
        targets: "#logo, #movil-menu-boton",
        className: "blue22"
      }
    });
	gsap.to("#eficiencia .contenido-uno", {
      scrollTrigger: {
        trigger: "#mark-efic",
        start: "top 90%",
        end: "top 70%",
        scrub: .2,
        stagger: .1,
      },
      autoAlpha: 0,
      stagger: .1,
      ease: "power4.easeInOut",
    });
    gsap.to("#eficiencia .contenido-dos .info", {
      scrollTrigger: {
        trigger: "#mark-efic",
        start: "top 70%",
        end: "top 40%",
        scrub: .2,
        stagger: .1,
      },
      autoAlpha: 1,
      stagger: .2,
      ease: "power4.easeInOut",
    });
	gsap.to("#imagen2", {
      scrollTrigger: {
        trigger: "#imagen3",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      y: -100,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
    gsap.to("#flecha-imagenes-1", {
      scrollTrigger: {
        trigger: "#flecha-imagenes-1",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      y: -50,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
	gsap.to("#imagen5", {
      scrollTrigger: {
        trigger: "#imagen5",
        start: "top 100%",
        end: "bottom 0",
        scrub: .2,
      },
      y: -100,
      immediateRender: false,
      ease: "power2.easeInOut",
    });
}
	$('nav .link-empresa').addClass("active");
}

companyscripts();
$('header nav, #logo, #movil-menu-boton').addClass("blue");
