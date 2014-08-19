var w = 450,
    h = 450,
    p = 50,
    x = d3.scale.linear().domain([0, 1]).range([0, w]),
    y = d3.scale.linear().domain([0, newCeilY]).range([h, 0]);

var chart = d3.select("#mainGraph")
    .append("svg:svg")
    .attr("width", w + p * 2)
    .attr("height", h + p * 2);

var vis = chart.append("svg:g")
    .attr("transform", "translate(" + p + "," + p + ")");
