const aulaHTML = 'aulas/Aula 3 - HTML básico.pdf'
const aulaCSS = 'aulas/5 - 2 CSS Fundamentos.pdf'
const aulaFlexbox = 'aulas/7 - Flexbox.pdf'
const aulaDOM = 'aulas/Aula 8 - JavaScript com DOM.pdf'

const HTML = document.getElementById('html')
const CSS = document.getElementById('css')
const Flexbox = document.getElementById('flexbox')
const DOM = document.getElementById('dom')

const mIframe = (t) => {
    document.getElementById('iframe').src = t
}

const mudarHTML = () => {
    mIframe(aulaHTML)
}

const mudarCSS = () => {
    mIframe(aulaCSS)
}

const mudarFlexbox = () => {
    mIframe(aulaFlexbox)
}

const mudarDOM = () => {
    mIframe(aulaDOM)
}
HTML.addEventListener('click', mudarHTML)
CSS.addEventListener('click', mudarCSS)
Flexbox.addEventListener('click', mudarFlexbox)
DOM.addEventListener('click', mudarDOM)