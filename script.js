const menuBtn = document.getElementById('menu')
const closeBtn = document.getElementById('close')
const navLinks = document.getElementById('navlinks')

menuBtn.addEventListener('click', show);
closeBtn.addEventListener('click', close);

function show() {
    navLinks.style.display = 'flex';
    menuBtn.style.display = "none"
}

function close() {
    navLinks.style.display = 'none';
    menuBtn.style.display = "block"

}

