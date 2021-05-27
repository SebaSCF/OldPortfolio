document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: '.hdr-1, .sub-msg',
        translateY: [20, 0],
        duration: 700,
        opacity: [0, 1],
        easing: 'easeInOutSine'
    })
    anime({
        targets: '.msg',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1400,
        easing: 'easeInOutSine'
    })
    anime({
        targets: '  .stp',
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 1800,
        easing: 'easeInOutSine'
    })


    anime({
        targets: '.stp2',
        translateY: [300, 0],
        opacity: [0, 1],
        duration: 2800,
        easing: 'easeInOutSine'
    })
})