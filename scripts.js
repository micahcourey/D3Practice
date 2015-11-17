var data = [7, 10, 13, 21, 30, 36, 45, 68, 75];

var x = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0, 750]);

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });
    
