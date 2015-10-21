Code for d3 Presentation for Columbia ADI, 2012.10.11

Basic dot graph with scalable y-axis

Note that tutorial from http://www.ivanteoh.com/posts/176-d3-tutorial-scale-graph.html

WARNING: CODE SNIPPETS ARE CODE SNIPPETS AND MAY NOT RUN

1) default.html
This is the default html that contains a div for input button and another for the graph. We also link the d3 JavaScript library. 

2) random_data

We need to generate some random data using Math.random(). We create randomData function for returning a list of ten x and y values. For example, [{“x”: 0, “y”: 0.3}, {“x”: 0.1, “y”: 0.4}, ...]

3) y_axis

only y axis values are random. We need to get maximum value of the y axis using d3.max, in order to scale the y axis based on the maximum value of the data.

4) ceil_value

Sometime, the maximum value doesn’t suitable for domain range in scale axis. For example, 0.33333. Mike suggested a method to increase the size of domain to next highest rounded value.

5) SVG

Now, we determine the size of the graph, which are w and h for width and height. We need a svg container for the graph. We will append it inside #mainGraph div with width and height attributes. This is optional, which offset the graph with modify coordinate using translate in transform in a group. The <g> element is used to group SVG shapes together. For example, <g transform="translate(50,50)">` will translate coordinate **["x": 50, "y": 50] as zero in the that group.

6) rulers

Now, we add both x and y axises line grids and labels. We also notice that d3 supports css style. We make #ccc colour stroke style for both x and y line grids.

7) dots

This is the last step for the dots graph. All the dots are paths. What kind of symbols of the path is determined by d attribute. We also add title attribute in the path, so that when mouse is hovering the dots, tool tip is shown. Color of the dots fill is changed too. After you completed this steps, we will see a basic dot graph.

8) update_button

 This step is explaining what will happen after update button is clicked. Before that, we need to add onclick attribute in button type input with the update function name. For example, <input name="updateButton" type="button" value="Update" onclick="updateData()"/>. In the update function, we will get a new data list from randomData function. Then get the maximum ceil value, which is similar in initData function. Since, we are only want to rescale the y axis, we will select g.y. Make sure to select their parent, #mainGraph svg g, first before selecting them, in order to append the extra line grid in the right parent. For updating the line grids and labels, we are going to use update, enter and exit selections. Since we are append new line grid and label, we need to set all the attributes that are needed. On the other hand, we only update attributes that need to be changes in update and exit selections. Lastly, don't forget about updating the dots data too.

9) scale_graph.html

Completed graph! Voila!











