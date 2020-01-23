/*
    every part of the year is made up of tests
    They are laid out as a list
    If `cijfer` (score) is undefined, nothing will be rendered to screen in dashboard.js
*/


var gradeData;

fetch('../json/cijfers.json')
    .then(
        function(response) {
            if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                gradeData = data
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });