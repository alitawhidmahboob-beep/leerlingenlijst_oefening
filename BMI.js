// variablen declareren en initialiseren
let length = 185;
let weight = 100;
let taille = 10;
let ABSI;
let BMI;
// BMI uitrekenen
BMI= weight / (length*length);
// ABSI uitrekenen
ABSI= taille / (BMI^(2/3) * length^(1/2));
// de uitkomst loggen
console.log(`
    BMI: ${BMI}\n
    ABSI: ${ABSI}
     `);