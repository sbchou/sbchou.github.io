function updateData() {
    var data = randomData();
    var newMaxY = d3.max(data, function(d) {return d.y;});
    var newCeilY = reDomain(newMaxY);

    var w = 450,
        h = 450,
        x = d3.scale.linear().domain([0, 1]).range([0, w]),
        y = d3.scale.linear().domain([0, newCeilY]).range([h, 0]);

    var vis = d3.select("#mainGraph svg g");

    var yrule = vis.selectAll("g.y")
        .data(y.ticks(10));

    // yRule Enter
    var newrule = yrule.enter().append("svg:g")
        .attr("class", "y");

    newrule.append("svg:line")
        .attr("class", "yLine")
        .style("stroke", "#ccc")
        .style("shape-rendering", "crispEdges")
        .attr("x1", 0)
        .attr("x2", w)
        .attr("y1", 0)
        .attr("y2", 0)
        .transition()
        .duration(2000)
        .attr("y1", y)
        .attr("y2", y);

    newrule.append("svg:text")
        .attr("class", "yText")
        .attr("x", -3)
        .attr("dy", ".35em")
        .attr("text-anchor", "end")
        .attr("y", 0)
        .transition()
        .duration(2000)
        .attr("y", y)
        .text(y.tickFormat(10));

    // yLine Update
    yrule.select("line.yLine")
        .transition()
        .duration(2000)
        .attr("y1", y)
        .attr("y2", y);

    // yText Update
    yrule.select("text.yText")
        .transition()
        .duration(2000)
        .attr("y", y)
        .text(y.tickFormat(10));

    // yrule Remove
    var oldrule = yrule.exit();

    oldrule.select("line.yLine")
        .transition()
        .duration(2000)
        .attr("y1", 0)
        .attr("y2", 0)
        .remove();


    oldrule.select("text.yText")
        .transition()
        .duration(2000)
        .attr("y", 0)
        .remove();

    oldrule.transition()
        .duration(2000).remove();

    // Dots
    var node = vis.selectAll("path.dot")
        .data(data)
        .transition()
        .duration(2000)
        .attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });

    node.select("title.dotTitle")
        .text(function(d) { return "X: " + d.x.toFixed(3) + ", Y: " + d.y.toFixed(3); });

}
