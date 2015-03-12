$(document).ready(function(){
    var number = prompt("Enter a number");
        if (number % 1 !== 0) {
            alert("Please enter a whole number");
            window.location.reload();
            return false;
        };
    var num = + number;


function myfunction(max) {
	var text = "";
    var i;
    for (i=0; i<= max; i++) 
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

myfunction(num);

});


