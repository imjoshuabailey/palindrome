function isPalindrome(userInput) {
    let reverseString = ""
<<<<<<< HEAD
    for (let i = 0; i >= 0; i++) {
        let lastLetter = userInput.length - 1 - i;
        let firstLetter = userInput[i]
        
        
=======
    for (let i = userInput.length - 1; i >= 0; i--) {
        // let lastLetter = userInput.length - 1 - 1;
        // let firstLetter = userInput[1]
        reverseString += userInput[i]
>>>>>>> 551992764bb171ec3ba2b068022e7ad8e576312c
    }

    console.log(reverseString)

    if (userInput === reverseString) {
        console.log("palindrome tested true")
        return true;
        console.log("Is a Palindrome");
    }
    console.log("palindrome tested false")
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
<<<<<<< HEAD
*/
=======



function insertText() {
    const inputField = document.getElementById("input").value;
    
    console.log(inputField)
    const me = isPalindrome(inputField)
   
    if (me === true) {
        console.log("is palindrome")
      
    }
    else {
        console.log("not palindrome")
      
    }
}
>>>>>>> 551992764bb171ec3ba2b068022e7ad8e576312c
