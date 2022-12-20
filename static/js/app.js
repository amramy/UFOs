// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


// build our table - name usually reflects what were doing
// nested function ... to clear existing data creating fresh table. 
    // clearing table otherwise user ends up with pre-filtered data 
    // and OR many duplicates... no good for anyone.
    // use tbody.html- references table directly with ("") -empty string
function buildTable(data) {
    tbody.htmlL("");

    // use forEach loop with fat arrow to loop through each object in array. 
    // loops like 'for' loop except 'forEach' only works with arrays!!! can be combined with 
    // chaining for loop to our data
    data.forEach((dateRow) => {
        // create a variable that will append a row to the table body
        // notice let instead of var... limit to just this block... 
        // **Remember**use var when want code to be available globally
        let row = tbody.append("tr");
        // loop through each field in table... .forEach(val)one object per row
        // Object.values = tell JS to reference one object from array of data
        //(dataRow) each value into the dataRow
        Object.values(dataRow).forEach((val) => {
            // append value of object to cell in table with tag <td>
            let cell = row.append("td");
            // add the values... extracting only the text of value
            cell.text(val);
            }
        );
    });
}


// New function to handle button clicks "handleClick" 
//and what to do after input is given... filter by data... 
    // add date function and create variable to hold filtered/ unfiltered data
function handleClick() {
    // variable "date", 
    //d3.select() looks for HTML tags "datetime",
    // .property() look for and GRAB info and hold it in "date"
    let date = d3.select("#datetime").property("value");
    // Set default filter & save to new variable (OG table data), let user seach
    let filterData = tableData;
    // check date filter using "if" statement (check for conditions)

    // if statement to filter for date, if present return only that data
    //if-statement syntax
    //if ( condition ) { code to execute }
    if (date) {
        filterData = filterData.filter(row => row.datetime === date);
    };

    // Rebuild table with filtered data
    // NOTE ** if no date entered original tableData will display
    buildTable(filterData);
}

// Listen for the Event of a click
// selector string is id for HTML tag... adding unique id "filter-btn"
// by adding this we link code directly to filter button
// by adding .on() telling D3 to execute handleClick function
d3.selectAll("#filter-btn").on("click", handleClick);


// Build Final Table, build original table when page loads
buildTable(tableData);
