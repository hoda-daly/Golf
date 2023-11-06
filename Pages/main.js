
let cursor=document.querySelector('#cursor');
let cursorBlur=document.querySelector('#cursor-blur');

document.addEventListener('mousemove',function(dets){

cursor.style.left=dets.clientX+'px'
cursor.style.top=dets.clientY+'px'
cursorBlur.style.left=dets.clientX -200+'px'
cursorBlur.style.top=dets.clientY -200+'px'
})
const h4=document.querySelectorAll('#nav h4')
h4.forEach(function(el){
	el.addEventListener('mouseenter',function(){
		cursor.style.scale=2
		cursor.style.border='1px solid #fff'
		cursor.style.backgroundColor='transparent'
	 gsap.to(this,{
    backgroundColor:'#fff',
    color:'#000',
    duration:0.5,
    border:'1px solid #fff',
    padding:'10px',
    borderRadius:'5px',
    boxShadow:'0 0 5px #fff',
    margin:'0 10px',
    cursor:'pointer'
	})
	})


	el.addEventListener('mouseleave',function(){
		cursor.style.scale=1
		cursor.style.border='0px solid #95C11E'
		cursor.style.backgroundColor='#95C11E'
	 gsap.to(this,{
    backgroundColor:'none',
    color:'#000',
    duration:0.5,
    border:'1px solid none',
    padding:'10px',
    borderRadius:'5px',
    boxShadow:'0 0 5px none',
    margin:'0 10px',
    cursor:'pointer'
	})
	})

})
gsap.to('#nav',{
	backgroundColor: 'rgba(0,0,0,0.9)',
	duration: 0.5,
	height: "90px",
	// delay:1,
	scrollTrigger: {
		trigger: '#nav',
		scroller:'body',
		// markers:true,
		// start: 'top top',
		start:'top -10%',
		end: 'top -11%',
		scrub: 1,
	}
});

gsap.to('#main',{
	backgroundColor: '#000',
	scrollTrigger:{
		trigger:'#main',
		scroller:'body',
		// markers:true,
		start:'top -25%',
		end:'top -70%',
		scrub:2
	}
})

gsap.from("#about-us img,#about-us-in", {
	y: 90,
	opacity: 0,
	duration: 1,
	scrollTrigger: {
	  trigger: "#about-us",
	  scroller: "body",
	  // markers:true,
	  start: "top 70%",
	  end: "top 65%",
	  scrub: 1,
	},
  });
  gsap.from(".card", {
	scale: 0.8,
	// opacity:0,
	duration: 1,
	stagger: 0.1,
	scrollTrigger: {
	  trigger: ".card",
	  scroller: "body",
	  // markers:false,
	  start: "top 70%",
	  end: "top 65%",
	  scrub: 1,
	},
  });
  gsap.from("#colon1", {
	y: -70,
	x: -70,
	scrollTrigger: {
	  trigger: "#colon1",
	  scroller: "body",
	  // markers:true,
	  start: "top 55%",
	  end: "top 45%",
	  scrub: 4,
	},
  });
  gsap.from("#colon2", {
	y: 70,
	x: 70,
	scrollTrigger: {
	  trigger: "#colon1",
	  scroller: "body",
	  // markers:true,
	  start: "top 55%",
	  end: "top 45%",
	  scrub: 4,
	},
  });
  gsap.from("#page4 h1", {
	y: 50,
	scrollTrigger: {
	  trigger: "#page4 h1",
	  scroller: "body",
	  // markers:true,
	  start: "top 75%",
	  end: "top 70%",
	  scrub: 3,
	},
  });
