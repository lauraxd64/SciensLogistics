import*as THREE from"../build/three.module.js";
import{OrbitControls}from"../jsm/controls/OrbitControls.js";
import{GLTFLoader}from"../jsm/loaders/GLTFLoader.js";
import{RGBELoader}from"../jsm/loaders/RGBELoader.js";
import{DRACOLoader}from"../jsm/loaders/DRACOLoader.js";
let camera,scene,renderer,controls,clock,mixer;

function init(){clock=new THREE.Clock;
    const e=document.getElementById("canvas");
    document.body.appendChild(e),(camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,10,2e4)).position.set(5200,300,0),
scene = new THREE.Scene,
(new RGBELoader).setPath("assets/home/textures/").load("hdr_opt.hdr",function(e){
    e.mapping = THREE.EquirectangularReflectionMapping,
    scene.environment = e,
    (new GLTFLoader).setPath("assets/home/models/").setDRACOLoader((new DRACOLoader).setDecoderPath("assets/home/js/libs/draco/gltf/")).load("Volvo FH_opt.glb",function(e){(
        mixer=new THREE.AnimationMixer(e.scene)).clipAction(e.animations[0]).play(),scene.add(e.scene)
    })
}),screen.width>1024?(
    
    scene.position.x=-800,
    scene.position.z= 800,
    scene.rotation.y=-1,

    gsap.to
    (scene.rotation,
        {scrollTrigger:{
    trigger:"#tres",
    scrub:.2,
    //pin:"#tres",
    start:"top 0",
    //markers:true,
    end:"bottom 70%"},
    z:0,
    y:-3.1,
    ease:"power4.easeInOut",
    immediateRender:!1
}),
gsap.to(scene.position,{scrollTrigger:{
    trigger:"#tres",
    scrub:.2,
    start:"top 0",
    end:"bottom 55%"},
    x:1652.92,
    z:-3604.91,
    y:2,
    ease:"power4.easeInOut",
    immediateRender:!1}),

gsap.to(scene.position,{scrollTrigger:{
    trigger:"#gap",
    scrub:.2,
    start:"top 60%",
    end:"top 0%"},
    x:1752.92,
    z:3345.1,
    y:0,
    ease:"power4.easeInOut"
    ,immediateRender:!1}),
    
    gsap.to(scene.position,{scrollTrigger:{
        trigger:"#cuatro",
        scrub:.2,
        start:"top 0%",
        end:"top -10%"},
        x:1637.2,
        z:6500,
        y:-50,
        ease:"power4.easeInOut",
        immediateRender:!1}),
        
    gsap.to(scene.rotation,{scrollTrigger:{
        trigger:"#cuatro",
        scrub:.2,
        start:"top 0%",
        end:"top -10%"},
        y:0,
        ease:"power4.easeInOut",
        immediateRender:!1}),
        gsap.to(scene.position,
            {scrollTrigger:
                {trigger:"#mark1",
                scrub:.2,
                start:"top -10%",
                end:"top -100%"},
                x:1637.2,
                z:-2854.6,
                y:-50,ease:"power4.easeInOut",
                immediateRender:!1
            }),
            gsap.to(scene.position,
                {scrollTrigger:
                    {trigger:"#mark1",
                    scrub:.2,
                    start:"top 120%",
                    end:"top 50%"
                },
                y:-194.7,
                x:-1637.2,
                ease:"power4.easeInOut",
                immediateRender:!1
            }),
            gsap.to(scene.rotation,
                {scrollTrigger:
                    {trigger:"#mark1",
                    scrub:.2,
                    start:"top 120%",
                    end:"top 50%"},
                    y:.9,z:0,ease:"power4.easeInOut",
                    immediateRender:!1
                }),
            gsap.to(scene.position,
                {scrollTrigger:
                    {trigger:"#cinco",
                    scrub:.2,
                    start:"top 90%"
                    ,end:"top 50%"},
                    x:-1964.7,
                    z:0,
                    y:1280.2,
                    ease:"power4.easeInOut",
                    immediateRender:!1}),
            gsap.to(scene.rotation,
                {scrollTrigger:
                    {trigger:"#cinco",
                    scrub:.2,
                    start:"top 90%",
                    end:"top 50%"},
                    y:3.141592653589793,
                    z:.15,
                    ease:"power4.easeInOut",
                    immediateRender:!1
                })):(
                    scene.position.x=-760,
                    scene.position.z=1420,
                    scene.rotation.y=-.83,
            gsap.to(scene.position,
                {scrollTrigger:
                    {trigger:"#uno",
                    scrub:.2,
                    start:"bottom 25%",
                    end:"bottom -45%"},
                    x:4370,
                    z:-3500,
                    y:0,
                    ease:"power4.easeInOut",
                    immediateRender:!1}),
            gsap.to(scene.position,
                {scrollTrigger:
                    {trigger:"#uno",
                    scrub:.2,
                    start:"bottom -45%",
                    end:"bottom -50%"},
                    x:-1620,
                    z:-4880,
                    y:60,
                    ease:"power4.easeInOut",
                    immediateRender:!1}),
            gsap.to(scene.rotation,
                {scrollTrigger:
                    {trigger:"#uno",
                    scrub:.2,
                    start:"bottom -45%",
                    end:"bottom -50%"},
                    y:-3.1416,
        ease:"power4.easeInOut",
        immediateRender:!1

        
    }),

gsap.to(scene.position,{scrollTrigger:{
    trigger:"#cuatro",
    scrub:.2,
    start:"start 90%",
    end:"start 50%"},
    z:4880,
    ease:"power4.easeInOut",
    immediateRender:!1}),
gsap.to(scene.position,{scrollTrigger:{
    trigger:"#cuatro",
    scrub:.2,
    start:"start 40%",
    end:"start 40%"},
    x:-1620,
    z:4880,
    y:60,
    ease:"power4.easeInOut",
    immediateRender:!1}),
gsap.to(scene.rotation,{scrollTrigger:{
    trigger:"#cuatro",
    scrub:.2,
    start:"start 40%",
    end:"start 30%"},
    y:0,
ease:"power4.easeInOut",
immediateRender:!1})),
/*
gsap.to(scene.position,
    {scrollTrigger:{
        trigger:"#cinco-1",
        scrub:.2,
        start:"start 95%",
        end:"start 75%",
    },
    z:1,
    ease:"power4.easeInOut",
    immediateRender:!1
})),*/



(renderer=new THREE.WebGLRenderer({alpha:!0,antialias:!0})).setPixelRatio(window.devicePixelRatio),renderer.setSize(window.innerWidth,window.innerHeight),renderer.toneMapping=THREE.ACESFilmicToneMapping,renderer.toneMappingExposure=1.5,e.appendChild(renderer.domElement),renderer.setClearColor(0,0),(controls=new OrbitControls(camera,renderer.domElement)).enableDamping=!0,controls.dampingFactor=.05,controls.update(),window.addEventListener("resize",onWindowResize)}function onWindowResize(){camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight)}function animate(){requestAnimationFrame(animate),mixer&&mixer.update(clock.getDelta()),controls.update(),render()}function render(){camera.lookAt(0,700,0),renderer.render(scene,camera)}init(),animate();