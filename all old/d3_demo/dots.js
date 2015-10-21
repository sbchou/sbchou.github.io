var node = vis.selectAll("path.dot")
        .data(data)
        .enter().append("svg:path")
        .attr("class", "dot")
        .style("fill", "white")
        .style("stroke-width", "1.5px")
        .attr("stroke", "#9acd32")
        .attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; })
        .attr("d", d3.svg.symbol())
        .on("mouseover", function(d,i) {
            d3.select(this).transition().duration(300).style("fill","#00ffff"); })
        .on("mouseout", function(d,i) {
            d3.select(this).transition().duration(300).style("fill","white"); });

node.append("svg:title")
    .attr("class", "dotTitle")
    .text(function(d) { return "X: " + d.x.toFixed(3) + ", Y: " + d.y.toFixed(3); });

