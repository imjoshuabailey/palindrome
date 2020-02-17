function isPalindome (userInput) {
    let reverseString = ""
    for (let i = 0; i >= 0; i++) {
        let lastLetter = userInput.length - 1 - i;
        let firstLetter = userInput[i]
        
        
    }
    if (userInput === reverseString) {
        return true;
        console.log("Is a Palindrome");
    }
    return false;
    console.log("Is not a Palindrome")
}

/*
function checkInp(userInput)
 {
    let letters= /^[a-zA-Z]+$/;
    if (userInput.value.match(letters))
    {
    return true;
    console.log ("All are Letters");
    }
    else
    {
    alert ("Please input alaphabet characters only");
    return false;
    console.log ("Non standard alphabet character detected");
    }
}
*/