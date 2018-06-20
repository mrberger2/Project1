function printName (form) {
    var nameIn = form.nameBox.value;
    alert ("Hello " + nameIn + "!");
}
function sumNums() {
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    var result = (num2*(num2+num1))/2;
    alert("The result is " + result);
}
function reverseSen () {
    var s = document.getElementById("reverseString").value;
    var newRev="";
    var i;
    for ( i = s.length - 1; i >= 0; i--){
        newRev += s[i];
    }
    alert(newRev);
}