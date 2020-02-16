function isPalindrome(userInput) {
    let reverseString = ""
    for (let i = userInput.length - 1; i >= 0; i--) {
        // let lastLetter = userInput.length - 1 - 1;
        // let firstLetter = userInput[1]
        reverseString += userInput[i]
    }

    console.log(reverseString)

    if (userInput === reverseString) {
        console.log("palindrome tested true")
        return true;
    }
    console.log("palindrome tested false")
    return false;
}



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
