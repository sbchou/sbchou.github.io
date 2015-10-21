function randomData() {
    return d3.range(10).map(function(i) {
        return {x: i / 9, y: Math.random()};
    });
}
