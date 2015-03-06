function myFunction() {
	var text = "";
    var i;
    for (i=0; i<=100; i++) 
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



