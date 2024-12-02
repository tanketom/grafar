// Data for the table
const data = [
    {name: "Oscar Torp", party: "Ap", startYear: 1951, endYear: 1955, startAge: 56, endAge: 60},
    {name: "Einar Gerhardsen", party: "Ap", startYear: 1945, endYear: 1951, startAge: 48, endAge: 54},
    {name: "John Lyng", party: "H", startYear: 1963, endYear: 1963, startAge: 55, endAge: 55},
    {name: "Per Borten", party: "Sp", startYear: 1965, endYear: 1971, startAge: 51, endAge: 57},
    {name: "Trygve Bratteli", party: "Ap", startYear: 1971, endYear: 1972, startAge: 60, endAge: 61},
    {name: "Lars Korvald", party: "KrF", startYear: 1972, endYear: 1973, startAge: 55, endAge: 56},
    {name: "Kåre Willoch", party: "H", startYear: 1981, endYear: 1986, startAge: 53, endAge: 58},
    {name: "Gro Harlem Brundtland", party: "Ap", startYear: 1981, endYear: 1996, startAge: 42, endAge: 57},
    {name: "Thorbjørn Jagland", party: "Ap", startYear: 1996, endYear: 1997, startAge: 46, endAge: 47},
    {name: "Kjell Magne Bondevik", party: "KrF", startYear: 1997, endYear: 2000, startAge: 60, endAge: 63},
    {name: "Jens Stoltenberg", party: "Ap", startYear: 2000, endYear: 2013, startAge: 41, endAge: 54},
    {name: "Erna Solberg", party: "H", startYear: 2013, endYear: 2021, startAge: 52, endAge: 60},
    {name: "Jonas Gahr Støre", party: "Ap", startYear: 2021, endYear: 2023, startAge: 61, endAge: 63}
];

// Set up the SVG canvas dimensions
const margin = {top: 20, right: 30, bottom: 40, left: 50},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

const svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Set up the scales
const x = d3.scaleLinear()
    .domain([1860, 2030])
    .range([0, width]);

const y = d3.scaleLinear()
    .domain([30, 70])
    .range([height, 0]);

// Add the X Axis
svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")))
  .append("text")
    .attr("class", "axis-label")
    .attr("x", width)
    .attr("y", -6)
    .style("text-anchor", "end")
    .text("År");

// Add the Y Axis
svg.append("g")
    .call(d3.axisLeft(y))
  .append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "-3.5em")
    .style("text-anchor", "end")
    .text("Alder");

// Define party colors
const partyColors = {
    "Ap": "#FF0000",
    "H": "#0000FF",
    "Sp": "#008000",
    "KrF": "#FFD700"
};

// Add the lines and tooltips
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

data.forEach(d => {
    svg.append("line")
        .attr("class", "line")
        .attr("x1", x(d.startYear))
        .attr("y1", y(d.startAge))
        .attr("x2", x(d.endYear))
        .attr("y2", y(d.endAge))
        .attr("stroke", partyColors[d.party])
        .on("mouseover", function(event) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(`${d.name}, ${d.party}<br>Styrte fra ${d.startYear} til ${d.endYear}<br>Alder: ${d.startAge}-${d.endAge}`)
                .style("left", (event.pageX + 5) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    svg.append("text")
        .attr("x", x(d.endYear) + 5)
        .attr("y", y(d.endAge))
        .attr("dy", ".35em")
        .text(`${d.name}, ${d.party}`)
        .style("font-size", "10px")
        .style("fill", "black");
});

// Add the points
data.forEach(d => {
    svg.append("circle")
        .attr("cx", x(d.startYear))
        .attr("cy", y(d.startAge))
        .attr("r", 3)
        .attr("fill", partyColors[d.party]);

    svg.append("circle")
        .attr("cx", x(d.endYear))
        .attr("cy", y(d.endAge))
        .attr("r", 3)
        .attr("fill", partyColors[d.party]);
});
