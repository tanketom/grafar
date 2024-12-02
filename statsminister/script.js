// Data for the table
const data = [
    {name: "Fredrik Stang", party: "H", startYear: 1873, endYear: 1880, startAge: 65, endAge: 72},
    {name: "Christian Selmer", party: "H", startYear: 1880, endYear: 1884, startAge: 64, endAge: 68},
    {name: "Johan Sverdrup", party: "V", startYear: 1884, endYear: 1889, startAge: 68, endAge: 73},
    {name: "Emil Stang", party: "H", startYear: 1889, endYear: 1891, startAge: 55, endAge: 57},
    {name: "Johannes Steen", party: "V", startYear: 1891, endYear: 1893, startAge: 64, endAge: 66},
    {name: "Emil Stang", party: "H", startYear: 1893, endYear: 1895, startAge: 59, endAge: 61},
    {name: "Francis Hagerup", party: "H", startYear: 1895, endYear: 1898, startAge: 42, endAge: 45},
    {name: "Johannes Steen", party: "V", startYear: 1898, endYear: 1902, startAge: 71, endAge: 75},
    {name: "Otto Blehr", party: "V", startYear: 1902, endYear: 1903, startAge: 55, endAge: 56},
    {name: "Francis Hagerup", party: "H", startYear: 1903, endYear: 1905, startAge: 50, endAge: 52},
    {name: "Christian Michelsen", party: "Saml.", startYear: 1905, endYear: 1907, startAge: 48, endAge: 50},
    {name: "Jørgen Løvland", party: "V", startYear: 1907, endYear: 1908, startAge: 69, endAge: 70},
    {name: "Gunnar Knudsen", party: "V", startYear: 1908, endYear: 1910, startAge: 60, endAge: 62},
    {name: "Wollert Konow", party: "FV", startYear: 1910, endYear: 1912, startAge: 65, endAge: 67},
    {name: "Jens Bratlie", party: "H", startYear: 1912, endYear: 1913, startAge: 56, endAge: 57},
    {name: "Gunnar Knudsen", party: "V", startYear: 1913, endYear: 1920, startAge: 65, endAge: 72},
    {name: "Otto B. Halvorsen", party: "H", startYear: 1920, endYear: 1921, startAge: 48, endAge: 49},
    {name: "Otto Blehr", party: "V", startYear: 1921, endYear: 1923, startAge: 74, endAge: 76},
    {name: "Otto B. Halvorsen", party: "H", startYear: 1923, endYear: 1923, startAge: 51, endAge: 51},
    {name: "Abraham Berge", party: "FV", startYear: 1923, endYear: 1924, startAge: 72, endAge: 73},
    {name: "Johan Ludwig Mowinckel", party: "V", startYear: 1924, endYear: 1926, startAge: 54, endAge: 56},
    {name: "Ivar Lykke", party: "H", startYear: 1926, endYear: 1928, startAge: 54, endAge: 56},
    {name: "Christopher Hornsrud", party: "Ap", startYear: 1928, endYear: 1928, startAge: 69, endAge: 69},
    {name: "Johan Ludwig Mowinckel", party: "V", startYear: 1928, endYear: 1931, startAge: 58, endAge: 61},
    {name: "Peder Kolstad", party: "B", startYear: 1931, endYear: 1932, startAge: 53, endAge: 54},
    {name: "Jens Hundseid", party: "B", startYear: 1932, endYear: 1933, startAge: 49, endAge: 50},
    {name: "Johan Ludwig Mowinckel", party: "V", startYear: 1933, endYear: 1935, startAge: 63, endAge: 65},
    {name: "Johan Nygaardsvold", party: "Ap", startYear: 1935, endYear: 1945, startAge: 56, endAge: 66},
    {name: "Einar Gerhardsen", party: "Ap", startYear: 1945, endYear: 1951, startAge: 48, endAge: 54},
    {name: "Oscar Torp", party: "Ap", startYear: 1951, endYear: 1955, startAge: 56, endAge: 60},
    {name: "Einar Gerhardsen", party: "Ap", startYear: 1955, endYear: 1963, startAge: 60, endAge: 68},
    {name: "John Lyng", party: "H", startYear: 1963, endYear: 1963, startAge: 55, endAge: 55},
    {name: "Einar Gerhardsen", party: "Ap", startYear: 1963, endYear: 1965, startAge: 68, endAge: 70},
    {name: "Per Borten", party: "Sp", startYear: 1965, endYear: 1971, startAge: 51, endAge: 57},
    {name: "Trygve Bratteli", party: "Ap", startYear: 1971, endYear: 1972, startAge: 60, endAge: 61},
    {name: "Lars Korvald", party: "KrF", startYear: 1972, endYear: 1973, startAge: 55, endAge: 56},
    {name: "Trygve Bratteli", party: "Ap", startYear: 1973, endYear: 1976, startAge: 62, endAge: 65},
    {name: "Odvar Nordli", party: "Ap", startYear: 1976, endYear: 1981, startAge: 49, endAge: 54},
    {name: "Gro Harlem Brundtland", party: "Ap", startYear: 1981, endYear: 1981, startAge: 42, endAge: 42},
    {name: "Kåre Willoch", party: "H", startYear: 1981, endYear: 1986, startAge: 53, endAge: 58},
    {name: "Gro Harlem Brundtland", party: "Ap", startYear: 1986, endYear: 1989, startAge: 47, endAge: 50},
    {name: "Jan P. Syse", party: "H", startYear: 1989, endYear: 1990, startAge: 58, endAge: 59},
    {name: "Gro Harlem Brundtland", party: "Ap", startYear: 1990, endYear: 1996, startAge: 51, endAge: 57},
    {name: "Thorbjørn Jagland", party: "Ap", startYear: 1996, endYear: 1997, startAge: 46, endAge: 47},
    {name: "Kjell Magne Bondevik", party: "KrF", startYear: 1997, endYear: 2000, startAge: 60, endAge: 63},
    {name: "Jens Stoltenberg", party: "Ap", startYear: 2000, endYear: 2001, startAge: 41, endAge: 42},
    {name: "Kjell Magne Bondevik", party: "KrF", startYear: 2001, endYear: 2005, startAge: 63, endAge: 67},
    {name: "Jens Stoltenberg", party: "Ap", startYear: 2005, endYear: 2013, startAge: 46,},
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
    .domain([1873, 2023])
    .range([0, width]);

const y = d3.scaleLinear()
    .domain([30, 80])
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
    "KrF": "#FFD700",
    "V": "#00FF00",
    "Saml.": "#FFA500",
    "FV": "#800080",
    "B": "#A52A2A"
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
