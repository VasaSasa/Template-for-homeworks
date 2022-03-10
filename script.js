// alert("Ahojky")

/*let user = Number(prompt("Zadej celé číslo.(kladné, záporné,nulu)"));
if (user == 0) {
    console.log("Zadal jsi nulu.");
} else if (user > 0) {
    console.log("Zadal jsi kladné číslo.");
} else {
    console.log("Zadal jsi záporné číslo.");
}*/

/*let user = Number(prompt("Zadejte svůj věk."));
if (user > 0 && user <= 120) {
    console.log("Váš věk je:",user,"rok/roky/roků.");
} else {
    console.log("Zadaný věk neodpovídá lidskému životu!!!");
}*/



/*let user = Number(prompt("Zadejte celé číslo.(V matematice označeno Z)"));
if (user >= 0) {
    console.log("|",user,"|","=",user,",","|-",user,"| =",user);
} else {
    console.log("Vaše číslo je záporné")
}*/



let user = Number(prompt("Zadejte celé číslo.(V matematice označeno Z)"));
if (user >= 0) {
    console.log("(|",user,"|=",user,", |-",user,"|=",user,")");
} else {
    console.log("(|",Math.abs(user),"|=",Math.abs(user),", |",user,"|=",Math.abs(user),")");
}


// let date = new Date();
// console.log(date);
// let hours = getHours();
// console.log(hours);