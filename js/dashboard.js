// Function to make the next part a lot easier
// Returns an HTML object with the specified tag and class(es)
function makeElem(tagName, className) {
    toRet = document.createElement(tagName);
    toRet.className = className;
    return toRet;
}

(function() {
    // get the element by id `toetsOverzicht`. There will only be one
    const toetsOverzicht = document.getElementById('toetsOverzicht');
    // initialize counter for progressbar later on
    var totalEC = 0;

    // process a course
    const processCourse = function(course) {
        var toetsLI = makeElem('li', 'toets');
        var toetsNaam = makeElem('p', 'naam');
        var toetsECMax = makeElem('p', 'maxEC');
        toetsECMax.style = "text-align: right;"
        var toetsScore = makeElem('p', 'score');
        var toetsEC = makeElem('p', 'EC');

        // set values for every element defined just above if they are provided
        // also increment totalEC if tests have been passed
        if (course.naam != null) {
            toetsNaam.innerHTML = course.naam;
            if (course.maxStudiepunten != null) toetsECMax.innerHTML = "(" + course.maxStudiepunten + " EC)";
            if (course.cijfers != null) {
                toetsScore.innerHTML = course.cijfers.map(e => {return e || ""}).join(" ");
                if (course.cijfers.reduce((s, e) => {return s+e})/course.cijfers.length >= 5.5) {
                    totalEC += course.maxStudiepunten;
                    if (course.maxStudiepunten != null) toetsEC.innerHTML = "(" + course.maxStudiepunten + " EC)";
                } else if (!course.cijfers.includes(null)) {
                    toetsLI.className += " -";
                    if (course.maxStudiepunten != null) toetsEC.innerHTML = "(0 EC)";
                } else if (course.cijfers.includes(null) && course.cijfers.length > 1) {
                    toetsLI.className += " testProgress";
                }
            }
        }
        // append all to li
        toetsLI.appendChild(toetsNaam);
        toetsLI.appendChild(toetsECMax);
        toetsLI.appendChild(toetsScore);
        toetsLI.appendChild(toetsEC);
        // append li to ul
        return toetsLI;
    }

    // process a block
    const processBlock = function(block, blockNumber) {
        // make a ul element per part
        var blockUl = makeElem('ul', 'blok');
        // add the title element per part
        var blockTitle = makeElem('li', 'titel');
        // set innerHTML of title
        blockTitle.innerHTML = `Blok ${blockNumber}`;
        // add styling based on amount of tests on the ul
        blockUl.style = "grid: repeat(" + (Number(block.length)+1) + ", auto) / auto;"
        // append title to ul
        blockUl.appendChild(blockTitle);

        for (course of block) {
            blockUl.appendChild(processCourse(course));
        }

        // append ul to overview
        toetsOverzicht.appendChild(blockUl);
    }

    // process a phase
    const processPhase = function(phase, needsProgressbar) {
        phase.forEach((e, i) => processBlock(e, i+1));

        if (needsProgressbar) {
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
            total.innerHTML = `<p id=the45mark class=unselectable>(${totalEC}/60 EC)</p><p class="unselectable ${voortgang}" style="margin: 0; width: ${voortgangperc}%;">Propedeuse</p>`;
            // append to overview
            toetsOverzicht.appendChild(total);
        }
    }

    // process all
    const processAll = function() {
        processPhase(gradeData.propedeuse, true);
        processPhase(gradeData.hoofdfase);
    }

    setTimeout(processAll, 1000);
})();