const removeFromArray = function(arr, ...targets) {

    for (let i = 0; i < targets.length; i++) {
        toRemoveIndex = arr.indexOf(targets[i]);

        if (toRemoveIndex != -1) {
            arr.splice(toRemoveIndex, 1);
        }
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
