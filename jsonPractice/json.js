function loadJSON() {

    // create XMLHttpRequest object
    var xmlhttp = _______________________________;

    // define what happens after the response is received
    xmlhttp.onreadystatechange = function() {

        // check if the request completed successfully
        if(xmlhttp.readyState == ____ &&
           xmlhttp.status == ____) {

            // convert JSON text into JavaScript data
            var data = _______________________________;

            // create table
            var output = "<table id='teamTable'>";

            output += "<tr>";
            output += "<th>Team Name</th>";
            output += "<th>Location</th>";
            output += "<th>Star Player</th>";
            output += "</tr>";

            // loop through JSON array
            for(var i = 0; i < ____________; i++) {

                output += "<tr>";

                // display team name
                output += "<td>" + __________________ + "</td>";

                // display location
                output += "<td>" + __________________ + "</td>";

                // display star player
                output += "<td>" + __________________ + "</td>";

                output += "</tr>";
            }

            output += "</table>";

            // display table on the webpage
            _______________________________;

            // apply table styling
            $("#teamTable").css("border-collapse", "collapse");
            $("th").css("border", "1px solid black");
            $("td").css("border", "1px solid black");
            $("th").css("padding", "8px");
            $("td").css("padding", "8px");
        }
    };

    // prepare request to retrieve teams.json
    xmlhttp.open("GET", ________________, true);

    // send request
    ________________;
}

function init() {

    // connect button click event to loadJSON function
    _______________________________;
}

// run init function after page loads
window.onload = init;