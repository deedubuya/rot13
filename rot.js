// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation". From 97 to 122 is the ASCII code for lowercase letters a-z. 110 is n, halfway

function rot13(message) {
    //your code here

    let newStr = "";
    let i = 0;

    for (var c of message) {
        console.log(c.charCodeAt(c));
        if (c.charCodeAt(c) >= 97 && c.charCodeAt(c) <= 109 || c.charCodeAt(c) >= 65 && c.charCodeAt(c) <= 77) {
            c = String.fromCharCode(c.charCodeAt(c) + 13);
            console.log(`${c} "plus 13"`);
        } else if (c.charCodeAt(c) >= 110 && c.charCodeAt(c) <= 122 || c.charCodeAt(c) >= 78 && c.charCodeAt(c) <= 90) {
            c = String.fromCharCode(c.charCodeAt(c) - 13);
            console.log(`${c} "minus 13"`);
        }
        newStr += c;

    }
    console.log(newStr);
}

rot13("Some random! message that has no $%#!! meaning.");