toggle = document.getElementById('toggle')
open - document.getElementById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')

// toggle nav
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

// show modal
open.addEventListener('click' () => {
    modal.classList.add('show-modal')
})

// hide modal with X
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

// hide modal with outside click
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show-modal')
    }
})
