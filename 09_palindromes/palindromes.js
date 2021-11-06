const palindromes = function (string) {
    parsed = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replaceAll(" ","");
    left = 0;
    right = parsed.length-1;
    while (left < right) {
        if (parsed.charAt(left) !== parsed.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
