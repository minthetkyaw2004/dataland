

// // Start Jquery Area

$(document).ready(function () {

    // Start Header
    //  Start Nav Bar

    $(".navbuttons").click(function () {
        $(this).toggleClass("crossxs");
    });
    // End Nav Bar

    // End Header

});




// End jQuery Area

// Start Javascript Area

// Start Student Counter Section

var getcountervalues = document.querySelectorAll('.countervalues');

console.log(getcountervalues);

getcountervalues.forEach(function (getcountervalue) {
    getcountervalue.textContent = 0;

    // console.log(getcountervalue);

    const updatecounter = function () {
        // console.log('i am working');

        const getcttarget = +getcountervalue.getAttribute('data-target');
        // console.log(getcttarget);
        // console.log(typeof getcttarget, getcttarget);

        const getctcontent = +getcountervalue.innerText;
        console.log(getctcontent, getctcontent);

        const incnumber = getcttarget / 40;
        console.log(incnumber);

        if (getctcontent < getcttarget) {
            getcountervalue.textContent = getctcontent + incnumber;
            setTimeout(updatecounter, 50);
        }
    }

    updatecounter();
});

// End Student Counter Section


// 25CT



// Start Rating Section 

// start google code for chart 
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Myanmar', 8],
        ['Thailand', 2],
        ['Singapore', 4],
        ['Indonesia', 2],
        ['SiriLanka', 8]
    ]);

    var options = {
        title: 'International Students',
        // is3D: true
        // pieHole: true
        width: 550,
        height: 400
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

// end google code for chart

// End Rating Section

// End Javascript Area 