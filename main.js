let form = document.getElementById('form')
let info = document.getElementById('info')

let chkMarried = document.getElementById('married');
let chkSingle = document.getElementById('single');
let spouses_age = document.getElementById('spouses_age')

let chkSons = document.getElementById('sons');
let chkNotSons = document.getElementById('not_sons');
let info_sons = document.getElementById('info_sons')

let name = document.getElementById('name');
let date = document.getElementById('date');
let ageSpouse = document.getElementById('ageSpouse');
let numberOfSons = document.getElementById('numberOfSons');

const precioBase = 250;
let comision = precioBase * 0.30;

let recargos = 0;

form.addEventListener('submit', e => {
    e.preventDefault()
    let dateSeparated = date.value.split(" ");
    let day = dateSeparated[1]
    let month = dateSeparated[0]
    let year = dateSeparated[2]
    let charges = []
    
    if (year <= 2002 && year > 1999) {
        console.log('No se le aplican recargos');
    } else if (year <= 1999 && year > 1995) {
        console.log('Recargo de 1%');
        recargos = precioBase * 0.01
    } else if (year <= 1995 && year > 1990) {
        console.log('Recargo de 2%');
        recargos = precioBase * 0.02
    } else if (year <= 1990 && year > 1985) {
        console.log('Recargo de 5%');
        recargos = precioBase * 0.05
    } else if (year <= 1985 && year > 1980) {
        console.log('Recargo de 8%');
        recargos = precioBase * 0.08
    } else if (year <= 1980 && year > 1975) {
        console.log('Recargo de 12%');
        recargos = precioBase * 0.12
    } else {
        console.log('No se le puede asegurar');
    }
    
    if (ageSpouse.value) {
        charges.push('Conyuge')
        if (ageSpouse.value < 30) {
            console.log('Recargo de 1% conyuge');
            recargos = recargos + precioBase * 0.01
        } else if (ageSpouse.value >= 30 && ageSpouse.value < 40) {
            console.log('Recargo de 2% conyuge');
            recargos = recargos + precioBase * 0.02
        } else if (ageSpouse.value >= 40 && ageSpouse.value < 50) {
            console.log('Recargo de 3% conyuge');
            recargos = recargos + precioBase * 0.03
        } else if (ageSpouse.value >= 50 && ageSpouse.value < 70) {
            console.log('Recargo de 5% conyuge');
            recargos = recargos + precioBase * 0.05
        }
    }
    
    if (numberOfSons) {
        charges.push('Hijos menores de 21 años')
        console.log('Recargo de 1% hijos');
        recargos = recargos + precioBase * numberOfSons.value * 0.01
    }

    let totalPagar = precioBase + comision + recargos;
    console.log(totalPagar);

    info.innerHTML = `
    <ul>
        <li>Nombre: ${name.value}</li>
        <li>Fecha de nacimiento: ${year,  month,  day}</li>
        <li>Cargos:  
        <ul>
            ${ (charges != []) ? ` <li>&nbsp;&nbsp;&nbsp;Cargo por ${charges.map(c => c + " ")}</li> ` : `No hay recargos` }
        </ul>
        </li>
        <li>Total: Q. ${totalPagar}</li>
    </ul>   
    `
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
            <label class="active" for="name">Número de Hijos menores de 21 años</label>
        </div>
    `
})

chkNotSons.addEventListener('click', () => {
    info_sons.innerHTML = ''
})
