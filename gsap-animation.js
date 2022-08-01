let tl = gsap.timeline({defaults: {ease:"power4.inOut",duration:2}});

tl.from('.hero-bg', { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',opacity:.5,duration:2.8})
  .from('.hero-img',{ease:"Expo.easeOut", clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',y:100,opacity:0,duration:3},'-=1')
  .from('.gsap-hero-social-media',{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', opacity:0,y:0,duration:1},'-=2')
  .from('.navbar',{ clipPath:'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', opacity:0,duration:1},'-=1.5')
  .from('.navbar-nav',{ clipPath:'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', opacity:0,duration:.7},'-=.5')
