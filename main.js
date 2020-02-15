let form = document.getElementById('form')

let chkMarried = document.getElementById('married');
let chkSingle = document.getElementById('single');
let spouses_age = document.getElementById('spouses_age')

let chkSons = document.getElementById('sons');
let chkNotSons = document.getElementById('not_sons');
let info_sons = document.getElementById('info_sons')

form.addEventListener('submit', e => {
    e.preventDefault()
})

chkMarried.addEventListener('click', () => {
    spouses_age.innerHTML = `
        <input autofocus id="name" type="number" class="validate">
        <label class="active" for="name">Edad de Conyuge</label>
    `
})

chkSingle.addEventListener('click', () => {
    spouses_age.innerHTML = ''
})

chkSons.addEventListener('click', () => {
    info_sons.innerHTML = `
        <div id="number_sons" class="input-field col s6">
            <input autofocus id="name" type="number" class="validate">
            <label class="active" for="name">Número de Hijos</label>
        </div>

        <div id="age_sons" class="input-field col s6">
            <input autofocus id="name" type="text" class="validate">
            <label class="active" for="name">Edad de Hijos</label>
        </div>
    `
})

chkNotSons.addEventListener('click', () => {
    info_sons.innerHTML = ''
})
