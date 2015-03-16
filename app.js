


$(document).ready(function(){

    do{
        var number = prompt("Enter a number");
    } while (isInputInvalid(number));

    
    var num = + number;

    printFizzBuzz(num);

});

function isInputInvalid(number) {
    var isBad = number % 1 !== 0 || number == "";

    // isBad = number == "";

    if (isBad) {
            alert("Please enter a whole number");
            return true;
        }

    return false;
}

function printFizzBuzz(max) {
    var text = "";

    for (var i=0; i<= max; i++) 
    {
        if(i%3==0 && i%5==0) {
            console.log("FizzBuzz");
            text += "FizzBuzz <br/>";
        }

        else if (i%3===0) {
            console.log("Fizz");
            text += "Fizz <br/>";
        }

        else if (i%5===0) {
            console.log("Buzz");
            text += "Buzz <br/>";
        }
        else {
            console.log(i);
            text += i + "<br/>" 
        }
    }

    // document.getElementById("display").innerHTML = text;
    $('#display').append(text);
}

