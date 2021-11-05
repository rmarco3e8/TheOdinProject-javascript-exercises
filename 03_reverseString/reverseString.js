const reverseString = function(str) {

    chars = str.split("");

    reversed = ""

    for (let i = chars.length-1; i >= 0; i--) {
        reversed += chars[i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
