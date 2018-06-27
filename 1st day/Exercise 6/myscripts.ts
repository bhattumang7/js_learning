for (var i = 0; i < 10; i++) {
    console.log(i);  // displays numbers 0 to 9
}
//  variable i now redeclared but value not reset to undefined.
// instead it uses last set value of 9 from inside the for loop block
var i;
console.log(i);  // displays 10
alert(i);