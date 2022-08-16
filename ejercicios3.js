
let voto_usuario = "";


voto_usuario = prompt("Voy a ayudarte a averiguar cuantos segundos son el numero de horas que ingreses, si crees que esto te sera util ingresa 'SI', de lo contrario escriba 'SALIR'")

if ( voto_usuario != "SALIR") {
  let num_uno = parseInt(prompt ("Ingrese la cantidad de horas"));

console.log(" la cantidad de segundos es ", num_uno*3600);
}

else if ( voto_usuario == "SALIR") {
  let num_dos = parseInt(prompt ("Creeme, lo vas a necesitar. Ingrese la cantidad de horas"));

console.log(" la cantidad de segundos es ", num_dos*3600);
}

