import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
	'#first',
	{ x: -500, opacity: 0 },
	{ duration: 1, x: 0, opacity: 1 }
);

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: '#animate',
		start: 'bottom bottom',
		end: 'bottom top',
		scrub: true,
		markers: true,
		pin: true,
	},
});

tl.fromTo('#second', { y: 400 }, { y: 0, duration: 2 })
	.to('#first p', { y: -100, opacity: 0, duration: 2 }, '-=2')
	.to('#first h1', { opacity: 0, duration: 2 }, '-=2')
	.fromTo('#animate2', { y: window.innerHeight }, { y: 0, duration: 6 }, '+=1');
