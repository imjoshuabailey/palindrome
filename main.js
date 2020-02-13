function isPalindome (userInput) {
    let reverseString = ""
    for (let i = userInput.length - 1; i >= 0; i--) {
        reverseString += userInput[i]
    }
    if (userInput === reverseString) {
        return true;
    }
    return false;
}

isPalindome("")
  