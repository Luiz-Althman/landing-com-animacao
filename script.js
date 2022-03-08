gsap.registerPlugin(ScrollTrigger)

gsap.from(".animate_inicial_txt", {
    // duração da animação
    duration: 0.7,
    // opacidade que vai começar a animação
    opacity: 0,
    // posição do y que vai começar os elementos na animação
    y: -150,
    // tempo entre a animação dos elementos com a mesma classe 
    stagger: 0.4
})
gsap.from(".animate_inicial_img", {
    duration: 0.9,
    opacity: 0,
    x: 250,
})
gsap.from(".animate_artigos", {
    duration: 0.8,
    opacity: 0,
    x: -150,
    stragger: 0.4,
    delay: 1.2,
})
gsap.from(".animate_final", {
    scrollTrigger: ".animate_final",
    duration: 0.8,
    opacity: 0,
    y: -150,
    stragger: 0.5,
    delay: 0.5,
})