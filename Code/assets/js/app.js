// @TODO: YOUR CODE HERE!
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#scatter")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
//"C:" + path.sep + "D3" + path.sep + "Code" + path.sep + "assets" + path.sep + "data" + path.sep + "data.csv"
var path="assets\\data\\data.csv" //"C:\\D3\\Code\\assets\\data\\data.csv" ;
console.log(path); 

d3.csv(path, function(data) {

  // Add X 
  var x = d3.scaleLinear()
    .domain([0, 25])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0,30])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.poverty); } )
      .attr("cy", function (d) { return y(d.healthcare); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")

})