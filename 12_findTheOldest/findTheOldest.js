const findTheOldest = function(arr) {
    return arr.reduce((prev, curr) => {
        let currAge = ("yearOfDeath" in curr) ? curr.yearOfDeath-curr.yearOfBirth : new Date().getFullYear()-curr.yearOfBirth;
        let prevAge = ("yearOfDeath" in prev) ? prev.yearOfDeath-prev.yearOfBirth : new Date().getFullYear()-prev.yearOfBirth;
        if (currAge > prevAge) {
            return curr;
        }
        return prev;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
