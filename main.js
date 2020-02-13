function isPalindome (userInput) {
    let reverseString = ""
    for (let i = 0; i >= 0; i++) {
        let lastLetter = userInput.length - 1 - 1;
        let firstLetter = userInput[1]
        reverseString += userInput[i]
        
    }
    if (userInput === reverseString) {
        return true;
    }
    return false;
}