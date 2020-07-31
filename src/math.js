class Math {
    sum(a, b) {
        return a + b;
    }

    sumThreeNumbers(a, b, c, callback) {
        setTimeout(() => {
            callback(a + b + c);
        }, 0);
    }
}

module.exports = Math;