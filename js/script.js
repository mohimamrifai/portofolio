const gantiSwitch = document.getElementById('switch')
const portofolio_ats = document.getElementById('portofolio-ats')
const portofolio_web = document.getElementById('portofolio-web')

gantiSwitch.addEventListener('click', () => {
    portofolio_ats.classList.toggle('non-active')
    portofolio_web.classList.toggle('non-active')
})

