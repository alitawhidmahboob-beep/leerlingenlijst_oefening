let l, b, h, d;
let surface;

// rechthoek
l = 7;
b = 7;
surface= l * b;
console.log(surface);
// driehoek
l= 6;
h= 8;
surface= (l * h) / 2;
console.log(surface);
//cirkel
d= 7;
surface= Math.PI * Math.pow(d/2, 2);
console.log(surface);
// cilinder
h = 3;
d = 5;
surface= h * Math.PI * Math.pow(d/2, 2);
console.log(surface);
// kubus
d = 4
surface = Math.pow(d,3, 3);
console.log(surface);