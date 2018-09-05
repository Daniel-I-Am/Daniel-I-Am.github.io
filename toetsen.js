/*
    every part of the year is made up of tests
    They are laid out as a list
    If `cijfer` (score) is undefined, nothing will be rendered to screen in dashboard.js
*/

/*
var blokken;

fetch('cijfers.json')
    .then(
        function(response) {
            if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
                response.status);
            return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
            console.log(data);
        });
    }
)
.catch(function(err) {
    console.log('Fetch Error :-S', err);
});

console.log(blokken)
*/
var blokken = [
    [
        {
            naam: "Studieloopbaan Orientatie",
            cijfer: null,
            maxStudiepunten: 2.5
        },
        {
            naam: "Computer Science Basics",
            cijfer: null,
            maxStudiepunten: 7.5
        },
        {
            naam: "Programming Basics",
            cijfer: null,
            maxStudiepunten: 5
        }
    ],
    [
        {
            naam: "Object-oriented programming",
            cijfer: null,
            maxStudiepunten: 10
        },
        {
            naam: "Professional skills 1",
            cijfer: null,
            maxStudiepunten: 2.5
        },
        {
            naam: "HZ-Personality 2a",
            cijfer: null,
            maxStudiepunten: 2.5
        },
        {
            naam: "IT Personality 2a",
            cijfer: null,
            maxStudiepunten: 2.5
        }
    ],
    [
        {
            naam: "Framework development 1",
            cijfer: null,
            maxStudiepunten: 5
        },
        {
            naam: "Framework project 1",
            cijfer: null,
            maxStudiepunten: 5
        },
        {
            naam: "Professional skills 2",
            cijfer: null,
            maxStudiepunten: 2.5
        }
    ],
    [
        {
            naam: "Framework development 2",
            cijfer: null,
            maxStudiepunten: 5
        },
        {
            naam: "Framework project 2",
            cijfer: null,
            maxStudiepunten: 5
        },
        {
            naam: "Professional skills 3",
            cijfer: null,
            maxStudiepunten: 2.5
        },
        {
            naam: "Professionele werkplek 1",
            cijfer: null,
            maxStudiepunten: 2.5
        }
    ]
];