selectAll("g.x")
    .data(x.ticks(10))
    .enter().append("svg:g")
    .attr("class", "x");

xrule.append("svg:line")
    .style("stroke", "#ccc")
    .style("shape-rendering", "crispEdges")
    .attr("x1", x)
    .attr("x2", x)
    .attr("y1", 0)
    .attr("y2", h);

xrule.append("svg:text")
    .attr("x", x)
    .attr("y", h + 3)
    .attr("dy", ".71em")
    .attr("text-anchor", "middle")
    .text(x.tickFormat(10));

var yrule = vis.selectAll("g.y")
    .data(y.ticks(10))
    .enter().append("svg:g")
    .attr("class", "y");

yrule.append("svg:line")
    .attr("class", "yLine")
    .style("stroke", "#ccc")
    .style("shape-rendering", "crispEdges")
    .attr("x1", 0)
    .attr("x2", w)
    .attr("y1", y)
    .attr("y2", y);

yrule.append("svg:text")
    .attr("class", "yText")
    .attr("x", -3)
    .attr("y", y)
    .attr("dy", ".35em")
    .attr("text-anchor", "end")
    .text(y.tickFormat(10));
