const sumAll = function(left, right) {
    if (!Number.isInteger(left) || !Number.isInteger(right) || left < 0 || right < 0) 
        return "ERROR";
    let sum = 0;
    if (left > right) 
        return sumAll(right, left);
    for(let i = left; i <= right; ++i) {
        sum += i;
    }
    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
