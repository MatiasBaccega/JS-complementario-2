let lenguaje = ["ingles", "español", "portuges"]
let personaje = []


const saludo = () => {
    let nombre;
    do{
        nombre = prompt("Bienvenido a CODER-landia. \nIngrese su nombre");

    } while(nombre === "" || !isNaN(nombre));

    nombre = alert(" Hola " + nombre)
}

const idioma = () => {
    let seleccion; 
    do{
    seleccion = parseInt(prompt("Seleccione su idioma por favor: \n 1) Ingles \n 2) Español \n 3) Portuges"))
    switch (seleccion) {
        case 1: 
        console.log("seleccionaste el idioma " +  lenguaje[0])
        break;
        case 2:
        console.log("seleccionaste el idioma " +  lenguaje[1])
        break;
        case 3:
        console.log("seleccionaste el idioma " +  lenguaje[2])
        break;
    } } while((seleccion === "" || isNaN(seleccion)) || ((seleccion === 0 || seleccion >= 4)));
}

const crearPersonaje = () => {
    alert("A continuacion crearas tu personaje")
    personaje.push (prompt("ingresa el nombre de tu personaje"))
    personaje.push (prompt("ingresa el tipo de personaje"))
    personaje.push (parseInt (prompt("ingresa el daño")))
    personaje.push (parseInt (prompt("ingresa la vida")))

    for (let i = 0; i < personaje.length; i++)
    console.log(personaje[i])
}



saludo();
idioma ();
crearPersonaje ();





