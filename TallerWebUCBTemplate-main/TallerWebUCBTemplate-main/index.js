//#region ANIMACIONES NO TOCAR
const showAnimation = function(target, from, to) {
    gsap.fromTo(target, {
        x: from,
        duration: 1
    }, { 
        x: to, 
        ease: "power1.out",
        duration: 1.5 
    })
}

const fadeAnimation = function(target, delay) {
    gsap.fromTo(target, {
        opacity: 0,
        duration: 1
    }, { 
        opacity: 1,
        duration: 1.5,
        delay: delay
    })
}

const scaleAnimation = function(target, from, to, delay) {
    gsap.fromTo(target, {
        scale: from,
        duration: 1
    }, { 
        scale: to,
        duration: 1.5,
        delay: delay
    })
}
//#endregion

//#region Animaciones
//#endregion


//#region Lenis NO TOCAR
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
//#endregion