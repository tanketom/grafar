// Data for the table
const data = [
    {name: "Oscar Nissen", startYear: 1887, endYear: 1888, startAge: 41, endAge: 42},
    {name: "Hans G. Jensen", startYear: 1888, endYear: 1889, startAge: 38, endAge: 39},
    {name: "Christian Holtermann Knudsen", startYear: 1889, endYear: 1890, startAge: 33, endAge: 34},
    {name: "Carl Jeppesen", startYear: 1890, endYear: 1892, startAge: 36, endAge: 38},
    {name: "Christian Holtermann Knudsen", startYear: 1892, endYear: 1893, startAge: 36, endAge: 37},
    {name: "Carl Jeppesen", startYear: 1893, endYear: 1894, startAge: 39, endAge: 40},
    {name: "Christian Holtermann Knudsen", startYear: 1894, endYear: 1897, startAge: 38, endAge: 41},
    {name: "Ludvig Meyer", startYear: 1897, endYear: 1900, startAge: 38, endAge: 41},
    {name: "Christian Holtermann Knudsen", startYear: 1900, endYear: 1903, startAge: 44, endAge: 47},
    {name: "Oscar Nissen", startYear: 1903, endYear: 1906, startAge: 57, endAge: 60},
    {name: "Christopher Hornsrud", startYear: 1906, endYear: 1911, startAge: 43, endAge: 48},
    {name: "Christian Holtermann Knudsen", startYear: 1911, endYear: 1918, startAge: 55, endAge: 62},
    {name: "Kyrre Grepp", startYear: 1918, endYear: 1922, startAge: 33, endAge: 37},
    {name: "Emil Stang d.y.", startYear: 1922, endYear: 1923, startAge: 37, endAge: 38},
    {name: "Oscar Torp", startYear: 1923, endYear: 1945, startAge: 31, endAge: 53},
    {name: "Einar Gerhardsen", startYear: 1945, endYear: 1965, startAge: 48, endAge: 68},
    {name: "Trygve Bratteli", startYear: 1965, endYear: 1975, startAge: 54, endAge: 64},
    {name: "Reiulf Steen", startYear: 1975, endYear: 1981, startAge: 42, endAge: 48},
    {name: "Gro Harlem Brundtland", startYear: 1981, endYear: 1992, startAge: 42, endAge: 53},
    {name: "Thorbjørn Jagland", startYear: 1992, endYear: 2002, startAge: 42, endAge: 52},
    {name: "Jens Stoltenberg", startYear: 2002, endYear: 2014, startAge: 43, endAge: 55},
    {name: "Jonas Gahr Støre", startYear: 2014, endYear: 2023, startAge: 54, endAge: 64}
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
    .domain([1880, 2030])
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
        .on("mouseover", function(event) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            if (d.name === "Jonas Gahr Støre") {
                tooltip.html(`${d.name} styrte Arbeiderpartiet fra ${d.startYear} og leier partiet framleis, han var ${d.startAge} då han starta, og er no ${d.endAge}`)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            } else {
                tooltip.html(`${d.name} styrte Arbeiderpartiet fra ${d.startYear} til ${d.endYear}, alderen ${d.startAge}-${d.endAge}`)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            }
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
        .text(d.name)
        .style("font-size", "10px")
        .style("fill", "black");
});

// Add the points
data.forEach(d => {
    svg.append("circle")
        .attr("cx", x(d.startYear))
        .attr("cy", y(d.startAge))
        .attr("r", 3)
        .attr("fill", "#8b0000");

    svg.append("circle")
        .attr("cx", x(d.endYear))
        .attr("cy", y(d.endAge))
        .attr("r", 3)
        .attr("fill", "#8b0000");
});

// Calculate the average age for each partileader and store in a list
const averageAges = data.map(d => (d.startAge + d.endAge) / 2);
const years = data.map(d => d.startYear);

// Fit a linear regression model to the data
const coefficients = linearRegression(years, averageAges);
const trendline = years.map(year => coefficients[0] * year + coefficients[1]);

// Add the trendline to the graph
svg.append("path")
    .datum(years.map((year, i) => ({year, age: trendline[i]})))
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("stroke-width", 2)
    .attr("d", d3.line()
        .x(d => x(d.year))
        .y(d => y(d.age))
    );

// Linear regression function
function linearRegression(x, y) {
    const n = x.length;
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
    const sumXX = x.reduce((sum, xi) => sum + xi * xi, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    return [slope, intercept];
}

// Calculate the average age for each partileader and store in a list
const averageAges = data.map(d => (d.startAge + d.endAge) / 2);
const years = data.map(d => d.startYear);

// Fit a linear regression model to the data
const coefficients = linearRegression(years, averageAges);
const trendline = years.map(year => coefficients[0] * year + coefficients[1]);

// Add the trendline to the graph
svg.append("path")
    .datum(years.map((year, i) => ({year, age: trendline[i]})))
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("stroke-width", 2)
    .attr("d", d3.line()
        .x(d => x(d.year))
        .y(d => y(d.age))
    );
