// from data.js
var tableData = data;

// from data.js
var tableData = data;
console.log(tableData);

// get a reference to the table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    // use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });


// DAS button!
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // select the input date get the raw HTML nodes
    var inputElement = d3.select("#datetime");
    // get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    // console.log input value
    console.log(inputValue);
    // filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // console.log filter values
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // append cells to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});