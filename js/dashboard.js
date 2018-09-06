// Function to make the next part a lot easier
// Returns an HTML object with the specified tag and class(es)
function makeElem(tagName, className) {
    toRet = document.createElement(tagName);
    toRet.className = className;
    return toRet;
}

// wait until fetch request has finished
setTimeout(function() {
    // get the element by id `toetsOverzicht`. There will only be one
    var toetsOverzicht = document.getElementById('toetsOverzicht');
    // initialize counter for progressbar later on
    var totalEC = 0;
    // go through all parts of the year
    for (blok in blokken) {
        // make a ul element per part
        var blokUL = makeElem('ul', 'blok');
        // add the title element per part
        var blokTitel = makeElem('li', 'titel');
        // set innerHTML of title
        blokTitel.innerHTML = "Blok " + (Number(blok) + 1); //0-indexed, so need to add one
        // add styling based on amount of tests on the ul
        blokUL.style = "grid: repeat(" + (Number(blokken[blok].length)+1) + ", auto) / auto;"
        // append title to ul
        blokUL.appendChild(blokTitel);
        // go through all tests
        for (toets in blokken[blok]) {
            // make all elements, every piece of information is an element
            var toetsLI = makeElem('li', 'toets');
            var toetsNaam = makeElem('p', 'naam');
            var toetsECMax = makeElem('p', 'maxEC');
            toetsECMax.style = "text-align: right;"
            var toetsScore = makeElem('p', 'score');
            var toetsEC = makeElem('p', 'EC');
            // set values for every element defined just above if they are provided
            // also increment totalEC if tests have been passed
            if (blokken[blok][toets].naam != null) {
                toetsNaam.innerHTML = blokken[blok][toets].naam;
                if (blokken[blok][toets].maxStudiepunten != null) toetsECMax.innerHTML = "(" + blokken[blok][toets].maxStudiepunten + " EC)";
                if (blokken[blok][toets].cijfer != null) {
                    toetsScore.innerHTML = blokken[blok][toets].cijfer.toFixed(1);
                    if (blokken[blok][toets].cijfer >= 5.5) {
                        totalEC += blokken[blok][toets].maxStudiepunten;
                        if (blokken[blok][toets].maxStudiepunten != null) toetsEC.innerHTML = "(" + blokken[blok][toets].maxStudiepunten + " EC)";
                    } else {
                        toetsLI.className += " -";
                        if (blokken[blok][toets].maxStudiepunten != null) toetsEC.innerHTML = "(0 EC)";
                    }
                }
            }
            // append all to li
            toetsLI.appendChild(toetsNaam);
            toetsLI.appendChild(toetsECMax);
            toetsLI.appendChild(toetsScore);
            toetsLI.appendChild(toetsEC);
            // append li to ul
            blokUL.appendChild(toetsLI);
        }
        // append ul to overview
        toetsOverzicht.appendChild(blokUL);
    } // end of for loop through all parts of the year

    // progress bar stuff
    // make element
    total = makeElem('div', 'totaal');
    // init progress var
    var voortgang = "";

    // give -, +-, or + depending on the progress, this just defines the progressbar color
    if (totalEC < 45) {
        voortgang += " -";
    } else if (totalEC < 60) {
        voortgang += " +-";
    } else {
        voortgang += " +";
    }
    // calculate how far the bar should be filled
    var voortgangperc = Math.min(Math.floor(totalEC/60 * 100), 100);
    // set width of progressbar filling and add in the color class
    total.innerHTML = "<p id=the45mark class=unselectable>(" + totalEC + "/60 EC)</p><p class=\"unselectable " + voortgang + "\" style=\"margin: 0; width: " + voortgangperc + "%;\">Studievoortgang</p>";
    // append to overview
    toetsOverzicht.appendChild(total);
}, 1000)