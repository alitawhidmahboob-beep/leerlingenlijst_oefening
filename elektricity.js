// variabelen declrareren en ininsialliseren
// spanning uitgedrukt in volt
v = 230
// stroom uitgedrukt in ampere
i=2.85
//tijd uitgedrukt in seconden
t=0.02


r= Math.round(v /i);
// bereken vermogen p
p = Math.round(v * i);
// bereken frequentie f
f= Math.round(1 / t)

// alles loggen
console.log(
    `
    weerstand r = ${r}
    weerstand p = ${p}
    weerstand f = ${f}`
);