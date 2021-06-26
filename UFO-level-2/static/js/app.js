// from data.js
var tableData = data;
console.log(tableData);

// refer to the table body
var tbody = d3.select("tbody");

// UFO sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // select the input date, state, shape and get the raw HTML nodes
    var inputElement = d3.select("#input");
    // get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    // console.log input value
    // console.log(inputValue);
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    // console.log filter values
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});
