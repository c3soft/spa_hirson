const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () =>{
    const Tl = gsap.timeline({paused: true});
    Tl
    .staggerFrom(titreSpans, 1, {
        top: -150,
        opacity: 0,
        ease: "power2.out"},
        0.3)

    .staggerFrom(btns, 1, {
        opacity: 0,
        ease: "power2.out"},
        0.3, '-=1')

    .from(l1, 1, {
        width: 0,
        ease: "power2.out"},
        '-=2')
    
    .from(l2, 1, {
        width: 0,
        ease: "power2.out"},
        '-=2')

    .from(logo, 0.4, {
        transform: "scale(0)",
        ease: "power2.out"},
        '-=2')

    .staggerFrom(medias, 0.5, {
        right: -200,
        ease: "power2.out"},
        0.3, '-=1')
    

    Tl.play();
    })
