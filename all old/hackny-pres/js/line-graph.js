//graph("../../seasonality-viz/data/hour_avg.csv", "Hour", "Revenue");
//graph("../../seasonality-viz/data/day_avg.csv", "Day", "Revenue");

function graph(pathToCSV, interval, metric, div_name){
	d3.csv(pathToCSV, function(dataset){
			// define dimensions of graph
			var m = 100; // margins
			var w = 800- 2*m; // width
			var h = 600 - 2*m; // height
		
			var data = new Array();
			n = dataset.length;
			for(var i = 0; i < n; i++){
				if(metric.toLowerCase() == "revenue"){
					data[i] = parseFloat(dataset[i].average_revenue);
				}
				if(metric.toLowerCase() == "count"){
					data[i] = parseFloat(dataset[i].average_count);
				}
			}
			// X scale will fit all values from data[] within pixels 0-w
			var x = d3.scale.linear()
					.domain([0, data.length-1]).range([0, w]);
			// Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
			//var y = d3.scale.linear().domain([0, 24]).range([h, 0]);
			// automatically determining max range can work something like this
			var y = d3.scale.linear()
					.domain([d3.min(data, function(d) { return 0.75*d; }), d3.max(data, function(d) { return 1.00*d; })]).range([h, 0]);
	
			// create a line function that can convert data[] into x and y points
			var line = d3.svg.line()
				// assign the X function to plot our line as we wish
				.x(function(d,i) { 
					// verbose logging to show what's actually being done
					//console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
					// return the X coordinate where we want to plot this datapoint
					return x(i); 
				})
				.y(function(d) { 
					// verbose logging to show what's actually being done
					//console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
					// return the Y coordinate where we want to plot this datapoint
					return y(d); 
				})
	
			// Add an SVG element with the desired dimensions and margin.
			var graph = d3.select(div_name).append("svg:svg")
				  .attr("width", w + 2*m)
				  .attr("height", h + 2*m)
				  .append("svg:g")
				  .attr("transform", "translate(" + m + "," + m + ")");

			// create xAxis
			var xAxis = d3.svg.axis()
				.scale(x)
				.ticks(data.length)
				.tickSize(-h)
				.tickSubdivide(true)
				.orient("bottom");

			// Add the x-axis.
			graph.append("svg:g")
				  .attr("class", "x axis")
				  .attr("transform", "translate(0," + h + ")")
				 
				  .call(xAxis);
					
			// create left yAxis
			var yAxisLeft = d3.svg.axis()
				.scale(y)
				.orient("left");
			// Add the y-axis to the left
			graph.append("svg:g")
				  .attr("class", "y axis")
				  //.attr("transform", "translate(-25,0)")
				  .call(yAxisLeft);


			// Add the line by appending an svg:path element with the data line we created above
			// do this AFTER the axes above so that the line is above the tick-lines
			graph.append("svg:path").attr("d", line(data));
			
			//add title
			//graph.append("svg:text")
				//.attr("class", "chart label")
				//.attr("x", (w-2.5*m)/2)
				//.attr("y", -h + 2.5*m )
				//.text("Average " + metric + " vs. " + interval);
				
			//x-axis label
			graph.append("svg:text")	
				.attr("class", "x label")
				.attr("text-anchor", "end")
				.attr("x", w - 6)
				.attr("y", h - 6)
				.text(interval);
				
			//y-axis label
			graph.append("svg:text")	
				 .attr("class", "y label")
				.attr("text-anchor", "end")
				.attr("y", 6)
				.attr("dy", ".75em")
				.attr("transform", "rotate(-90)")
				.text(metric);
									
		});//end csv callback
	} //end draw function
				