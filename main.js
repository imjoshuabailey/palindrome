function isPalindrome(userInput) {

    for (let i = 0; i <= userInput.length -1; i++){
        let lastLetter = userInput[userInput.length -1 -i];
        let firstLetter = userInput[i];
        if (lastLetter !== firstLetter) {
            return false;
        }
    }
    return true;

    // let reverseString = ""

    // for (let i = userInput.length - 1; i >= 0; i--) {
    //     // let lastLetter = userInput.length - 1 - i;
    //     // let firstLetter = userInput[1]
    //     reverseString += userInput[i]
    // }


    // console.log(reverseString)

    // if (userInput === reverseString) {
    //     console.log("palindrome tested true")
    //     return true;

    // }
    // console.log("palindrome tested false")
    // return false;
}


function checkInp(userInput) {
    let letters = /^[a-zA-Z\s]+$/;
    let space = /^[ ]+$/;

    if (userInput.match(letters)) {
    console.log ("All are Letters");
    if (userInput.match(space)){
        return false;
    }
    return true
    }
    else{
    console.log("There are non-letters");
    return false;
    }
}




function insertText() {
    const inputField = document.getElementById("input").value;
    
    console.log(inputField)
    const checking = checkInp(inputField)

    console.log(checking)

    let palindromeCheck= "";

    if (checking) {
        palindromeCheck = isPalindrome(inputField.trim())
    }
    else {
        alert ("Please input alaphabet characters only");
        console.log ("Non standard alphabet character detected");
        return false;
    }

    if (palindromeCheck === true) {
        console.log("is palindrome")
        let ul = document.getElementById("isPalindrome"); 
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(inputField));
        ul.appendChild(li);
    }
    else {
        console.log("not palindrome")
        let ul = document.getElementById("notPalindrome"); 
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(inputField));
        ul.appendChild(li);
    }
}
let form = document.getElementById("inputForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm); 
