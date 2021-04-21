console.log(1 == "1")
console.log(1 === "1")

let ask = prompt("Quel est ton prénom?");
if (PerformanceNavigationTiming.length <5) {
    alert("Ton nom est trop court")
}

let addition = prompt("2 + 2 = ?")
if (addition == 4) {
    alert("You did it!")
}
else {
    alert("Wrooong")
}

let multiplication = prompt("4 * 4 = ?")
if (multiplication == 16) {
    alert("La réponse était bien 16")
}
else {
    alert("C'est dommage tu n'étais qu'à" + Math.abs(16 - multiplication) + "unité de la bonne réponse")
}

let pro =[];
let tab1 = prompt("Premier élément")
pro.push(tab1)
let tab2 = prompt("Deuxième élément")
pro.push(tab2)
let tab3 = prompt("Troisième élément")
pro.push(tab3)

let grandsNombres = []
let petitsNombres = []
let a = prompt("Donne un chiffre")
if (a >= 12) {
    grandsNombres.push(a)
}
else {
    petitsNombres.push(a)
}