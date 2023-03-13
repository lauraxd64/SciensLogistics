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

// Generales ////////////////////////////////////////////////////////////////////////////////////
const generalscripts = function () {
  const quotes = document.querySelectorAll(".title");

  function setupSplits() {
    quotes.forEach(quote => {
      // Reset if needed
      if (quote.anim) {
        quote.anim.progress(1).kill();
        quote.split.revert();
      }
      quote.split = new SplitText(quote, {
        type: "lines,words,chars",
        linesClass: "split-line"
      });
      // Set up the anim
      quote.anim = gsap.from(quote.split.chars, {
        scrollTrigger: {
          trigger: quote,
          toggleActions: "restart pause resume reverse",
          start: "top 60%",
        },
        duration: 0.2,
        ease: "Power1.easeInOut",
        y: 10,
        stagger: 0.01,
        autoAlpha: 0,
      });
    });
  }
  ScrollTrigger.addEventListener("refresh", setupSplits);
  setupSplits();
  //Eventos
  //	
  $('.link-home').click(function () {
    gsap.to("body", {
      autoAlpha: 0,
      duration: 1,
    })
    if ($('body').hasClass('translatepress-en_GB')) {
      setTimeout(function () {
        location.href = '/en/';
      }, 1000);
    } else if ($('body').hasClass('translatepress-fr_FR')) {
      setTimeout(function () {
        location.href = '/fr/';
      }, 1000);
    } else {
      setTimeout(function () {
        location.href = '/';
      }, 1000);
    };
  });
  //
  $('.link-empresa').click(function () {
    gsap.to("body", {
      autoAlpha: 0,
      duration: 1,
    });
    if ($('body').hasClass('translatepress-en_GB')) {
      setTimeout(function () {
        location.href = '/en/transport-logistics-company/';
      }, 1000);
    } else if ($('body').hasClass('translatepress-fr_FR')) {
      setTimeout(function () {
        location.href = '/fr/transport-logistique-entreprise/';
      }, 1000);
    } else {
      setTimeout(function () {
        location.href = '/empresa-transporte-logistica/';
      }, 1000);
    };
    return false;
  });
  //
  $('.link-flota').click(function () {
    gsap.to("body", {
      autoAlpha: 0,
      duration: 1,
    })
    if ($('body').hasClass('translatepress-en_GB')) {
      setTimeout(function () {
        location.href = '/en/truck-fleet/';
      }, 1000);
    } else if ($('body').hasClass('translatepress-fr_FR')) {
      setTimeout(function () {
        location.href = '/fr/flotte-camions/';
      }, 1000);
    } else {
      setTimeout(function () {
        location.href = '/flota/';
      }, 1000);
    };
	return false;
  });
  //
  $('.link-transporte').click(function () {
    gsap.to("body", {
      autoAlpha: 0,
      duration: 1,
    })
    if ($('body').hasClass('translatepress-en_GB')) {
      setTimeout(function () {
        location.href = '/en/road-transport/';
      }, 1000);
    } else if ($('body').hasClass('translatepress-fr_FR')) {
      setTimeout(function () {
        location.href = '/fr/transport-routier/';
      }, 1000);
    } else {
      setTimeout(function () {
        location.href = '/transporte-por-carretera/';
      }, 1000);
    };
    return false;
  });
  //
  $('.link-logistica').click(function () {
    gsap.to("body", {
      autoAlpha: 0,
      duration: 1,
    })
        if ($('body').hasClass('translatepress-en_GB')) {
      setTimeout(function () {
        location.href = '/en/comprehensive-logistics/';
      }, 1000);
    } else if ($('body').hasClass('translatepress-fr_FR')) {
      setTimeout(function () {
        location.href = '/fr/logistique-integrale/';
      }, 1000);
    } else {
      setTimeout(function () {
        location.href = '/logistica-integral/';
      }, 1000);
    };
    return false;
  });
  //
  $('.link-noticias').click(function () {
    gsap.to("body", {
      autoAlpha: 0,
      duration: 1,
    })
      if ($('body').hasClass('translatepress-en_GB')) {
      setTimeout(function () {
        location.href = '/en/news/';
      }, 1000);
    } else if ($('body').hasClass('translatepress-fr_FR')) {
      setTimeout(function () {
        location.href = '/fr/nouvelles/';
      }, 1000);
    } else {
      setTimeout(function () {
        location.href = '/noticias/';
      }, 1000);
		};
    return false;
  });
  //
  $('.link-contratacion').click(function () {
    gsap.to("body", {
      autoAlpha: 0,
      duration: 1,
    })
   if ($('body').hasClass('translatepress-en_GB')) {
      setTimeout(function () {
        location.href = '/en/hiring/';
      }, 1000);
    } else if ($('body').hasClass('translatepress-fr_FR')) {
      setTimeout(function () {
        location.href = '/fr/embauche/';
      }, 1000);
    } else {
      setTimeout(function () {
        location.href = '/contratacion/';
      }, 1000);
			};
    return false;
  });
  //
  $('.menu-servicios').mouseover(function () {
	$('.menu-servicios').addClass('open');
    $('.menu-servicios .submenu').css("display", "flex");
    $('.menu-servicios .submenu').css("opacity", "1");
  });
  $('.menu-servicios').mouseleave(function () {
    $('.menu-servicios .submenu').css("opacity", "0");
	$('.menu-servicios').removeClass('open');
	$('.menu-servicios span').css('transform', 'rotate(90deg)');
    setTimeout(function () {
      $('.menu-servicios .submenu').css("display", "none");
    }, 300);
  });


  /*Nuevo*/
  $('.menu-carrier').mouseover(function () {
  $('.menu-carrier').addClass('open');
    $('.menu-carrier .submenu').css("display", "flex");
    $('.menu-carrier .submenu').css("opacity", "1");
  });
  $('.menu-carrier').mouseleave(function () {
    $('.menu-carrier .submenu').css("opacity", "0");
  $('.menu-carrier').removeClass('open');
  $('.menu-carrier span').css('transform', 'rotate(90deg)');
    setTimeout(function () {
      $('.menu-carrier .submenu').css("display", "none");
    }, 300);
  });
  
  $('.menu-sectors').mouseover(function () {
  $('.menu-sectors').addClass('open');
    $('.menu-sectors .submenu').css("display", "flex");
    $('.menu-sectors .submenu').css("opacity", "1");
  });
  $('.menu-sectors').mouseleave(function () {
    $('.menu-sectors .submenu').css("opacity", "0");
  $('.menu-sectors').removeClass('open');
  $('.menu-sectors span').css('transform', 'rotate(90deg)');
    setTimeout(function () {
      $('.menu-sectors .submenu').css("display", "none");
    }, 300);
  });
  /*Nuevo Fin*/



  $('.menu-contacto').mouseover(function () {
	$('.menu-contacto').addClass('open');
    $('.menu-contacto .submenu').css("display", "flex");
    $('.menu-contacto .submenu').css("opacity", "1");
  });
  $('.menu-contacto').mouseleave(function () {
    $('.menu-contacto .submenu').css("opacity", "0");
	$('.menu-contacto').removeClass('open');
	$('.menu-contacto span').css('transform', 'rotate(90deg)');
    setTimeout(function () {
      $('.menu-contacto .submenu').css("display", "none");
    }, 300);
  });








  $(".backtop").click(function () {
    bodyScrollBar.scrollTo(0, -1, 3000);
  });

  $('.submenu ul li').on('mouseenter', function () {
    $(this).find("span").addClass('on');
  });
  $('.submenu ul li').on('mouseleave', function () {
    $(this).find("span").removeClass('on');
  });

  if (screen.width < 1024) {
    $('#movil-menu-boton').click(function () {
      if ($('#movil-menu-boton').hasClass('openb')) {
        $('#movil-menu-boton').removeClass('openb');
        $('#movil-nav').removeClass('open');
        $('#movil-menu-boton').removeClass('whiteopen');
        $('#logo').removeClass('whiteopen');
		$('#arrow_mov2').css('right','80vw');
      } else {
        $('#movil-menu-boton').addClass('openb');
        $('#movil-nav').addClass('open');
        $('#movil-menu-boton').addClass('whiteopen');
        $('#logo').addClass('whiteopen');
		$('#arrow_mov2').css('right','50vw');
      }
    });
	  
    $('.menu-servicios').click(function () {
      if ($('.menu-servicios').hasClass('open')) {
 		$('.menu-servicios').removeClass('open');
		$('.menu-servicios .submenu').css('display', 'none');
		$('.menu-servicios .submenu').css('opacity', '0');
		$('.menu-servicios span').css('transform', 'rotate(90deg)');
      } else {
		 $('.menu-servicios').addClass('open');
		 $('.menu-servicios .submenu').css('display', 'flex');
		$('.menu-servicios .submenu').css('opacity', '1');
		 $('.menu-servicios span').css('transform', 'rotate(270deg)');
		 $('.menu-contacto').removeClass('open');
		$('.menu-contacto .submenu').css('display', 'none');
		$('.menu-contacto .submenu').css('opacity', '0');
		$('.menu-contacto span').css('transform', 'rotate(90deg)');
	  }
    });
	    $('.menu-contacto').click(function () {
      if ($('.menu-contacto').hasClass('open')) {
 		$('.menu-contacto').removeClass('open');
		$('.menu-contacto .submenu').css('display', 'none');
		$('.menu-contacto .submenu').css('opacity', '0');
		$('.menu-contacto span').css('transform', 'rotate(90deg)');
      } else {
		 $('.menu-contacto').addClass('open');
		 $('.menu-contacto .submenu').css('display', 'flex');
		$('.menu-contacto .submenu').css('opacity', '1');
		 $('.menu-contacto span').css('transform', 'rotate(270deg)');
		 $('.menu-servicios').removeClass('open');
		$('.menu-servicios .submenu').css('display', 'none');
		$('.menu-servicios .submenu').css('opacity', '0');
		$('.menu-servicios span').css('transform', 'rotate(90deg)');
	  }
    });
	  
    $('.trp-ls-shortcode-language').addClass('movil')
  }
  //Fin de la funci¨®n
}

if ($('#video-corp-in').length > 0) {
    const playvid = function () {
      const optionsvid = {
        id: 714117999,
        width: 640,
        controls: true,
      };
      const playervid = new Vimeo.Player('video-corp-in', optionsvid, );
    }
    playvid();
};
if ($('#video-corp-in-en').length > 0) {
    const playvid = function () {
      const optionsvid = {
        id: 678076492,
        width: 640,
        controls: true,
      };
      const playervid = new Vimeo.Player('video-corp-in-en', optionsvid, );
    }
    playvid();
};

generalscripts();

// JS Preloaoder
gsap.to("body", {
  autoAlpha: 1,
  delay: 0.5,
  duration: 1.5,
})
