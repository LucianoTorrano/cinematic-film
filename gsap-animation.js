let tl = gsap.timeline({defaults: {ease:"power4.inOut",duration:2}});

tl.to('.hero-bg', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',opacity:1,duration:2.8})
  .to('.hero-img',{ease:"Expo.easeOut", clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',y:-80,opacity:1,duration:3},'-=1')
  .to('.gsap-hero-social-media',{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity:1,y:0,duration:1},'-=2')
  .to('.navbar',{ clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity:1,duration:1},'-=1.5')
  .to('.navbar-nav',{ clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity:1,duration:.7},'-=.5')
if(window.innerWidth < 680){
  tl.to('.scroll-icon',{opacity:1,duration:.7},'-=1');
}

  /* CAMBIAR DE FROM A TO PARA EVITAR PROBLEMAS DE CARGA */