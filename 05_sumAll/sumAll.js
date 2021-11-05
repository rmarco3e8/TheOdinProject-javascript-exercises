const sumAll = function(a, b) {
    
    if (typeof a != "number" || typeof b != "number" || a < 0 || b < 0) {
        return "ERROR";
    }

    start = Math.min(a, b);
    end = Math.max(a, b);

    sum = 0;
    
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
