function reDomain(maxValue) {
    var dy = Math.pow(10, Math.round(Math.log(maxValue) / Math.log(10)) - 1);
    return Math.ceil(maxValue / dy) * dy;
}

var newCeilY = reDomain(newMaxY);
