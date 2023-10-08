// If 
let n = 4;

if (n < 27) {
    console.log("x smaller than 27");
}

// Else
let shalat = "jumat";

if (shalat === "jumat") {
    console.log("Ini hari jumat");
} else {
    console.log("Ini bukan hari jumat");
}

// Nested If
let udahshalatkah = "udah";

if (udahshalatkah === "udah") {
    console.log("Alhamdulillah");
} else if ( udahshalatkah === "belum") {
    console.log ("Astagfirullah");
} else {
    console.log ("Hmm");
}

// Switch case
let coffe = "Black";

switch (coffe) {
    case "Black":
        console.log ("This is Black coffe");
        break;
    case "Mocca":
        console.log ("This is Mocca coffe");
        break;
    default:
        console.log ("This is neither black coffee nor mocha coffee")
}

// for statement
for (let i = 4; i <= 27; i++) {
    console.log ("Perulangan menghasilkan angka " + i);
}

// while
let m = 1;
while ( m < 4) {
    console.log ("Perulangan menghasilkan angka " + m);
    m++;
}

// do while
let l = 4;
do {
    console.log ("Perulangan menghasilkan angka " + l);
    l++;
} while ( l < 7 );

// function
function plus (a,k) {
    return a + k;
}

let result = plus ( 4, 7 );
console.log ("the result: " + result);