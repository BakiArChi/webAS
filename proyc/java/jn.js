let datos = {};

fetch("datos.json")
.then (response=> response.json())
.then (data=>{
datos = data
console.log(datos)
})
function cantidadPersonas(numpers) {
    let cantidapersonas = 0;
    for (let i = 0; i < numpers.results.length; i++) {
        cantidapersonas++ 
    }
    return cantidapersonas
}

function cantidadMales(nummales) {
    let contadordemales = 0;
    for (let i = 0; i < nummales.results.length; i++) {
        if (nummales.results[i].gender === "male") {
            contadordemales ++
        }
        
    }
    return contadordemales
}

function cantidadFemales(numfemale) {
    let contadordefemales = 0;
    for (let i = 0; i < numfemale.results.length; i++) {
        if (numfemale.results[i].gender ==="female") {
            contadordefemales++
        }
        
    }
    return contadordefemales
}

function promdeioEdad(promEdad) {
    let personas = 0;
    let edades = 0;
    for (let i = 0; i < promEdad.results.length; i++) {
         personas++;
         edades += promEdad.results[i].dob.age
    }
    return edades/personas
}

function cantMenores(numMenores) {
    let cantidaddemenores = 0;
    for (let i = 0; i < numMenores.results.length; i++) {
        if (numMenores.results[i].dob.age < 28) {
            cantidaddemenores++
        }
    }
    return cantidaddemenores
}

function masviejo(mayor) {
    let my=0;
    for (let i = 0; i < mayor.results.length; i++) {
        if (mayor.results[i].dob.age > my) {
            my = mayor.results[i].dob.age
        }
        
    }
    return my;
}

function masjoven(joven) {
    let mn=999999;
    for (let i = 0; i < joven.results.length; i++) {
        if (joven.results[i].dob.age < mn) {
           mn = joven.results[i].dob.age            
        }
        
    }
    return mn
}