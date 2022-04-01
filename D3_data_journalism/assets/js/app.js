// create chart
var svgWidth = 900;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 50
};

var width = svgWidth - margin.left - margin.right;
var Height = svgHeight - margin.top - margin.bottom;

//create wrapper
var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var chartGroup = svg.append("g")
    .attr("transform", 'translate(${margin.left}, ${margin.top})');

d3.csv("assets/data/data.csv").then(function(CensusData) {
    CensusData.forEach(Function(data) {
        data.age = +data.age;
        data.smokes = +data.smokes;
        console.log(data)    
    });


});
