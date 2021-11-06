const fibonacci = function(numIn) {
    let num = parseInt(numIn);
    if (num < 0) {
        return "OOPS";
    } else if (num === 1) {
        return 1;
    }
    let memo = Array(num);
    memo[0] = 1;
    memo[1] = 1;

    for (let i = 2; i < num; i++) {
        memo[i] = memo[i-1] + memo[i-2];
    }

    return memo[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
