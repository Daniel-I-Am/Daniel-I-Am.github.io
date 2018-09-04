function onScroll() {
    if (window.scrollY>0) {
        // set the background color of the header title to the same as the rest of the nav bar if someone scrolls down
        document.getElementById('header').style="background-color: var(--navbar-color);"
    } else {
        //reset all specific styling for the header object if scrolled all the way to the top
        document.getElementById('header').style=""
    }
}
document.getElementsByTagName("body")[0].onscroll = function() {onScroll()};

function makeElem(tagName, className) {
    toRet = document.createElement(tagName);
    toRet.className = className;
    return toRet;
}

var toetsOverzicht = document.getElementById('toetsOverzicht');
var totalEC = 0;
for (blok in blokken) {
    var blokUL = makeElem('ul', 'blok');
    var blokTitel = makeElem('li', 'titel');
    blokTitel.innerHTML = "Blok " + (Number(blok) + 1); //0-indexed, so need to add one
    blokUL.style = "grid: repeat(" + (Number(blokken[blok].length)+1) + ", auto) / minmax(300px, 60%) 20% repeat(2, 10%);"
    blokUL.appendChild(blokTitel);
    for (toets in blokken[blok]) {
        var toetsLI = makeElem('li', 'toets');
        var toetsNaam = makeElem('p', 'naam');
        var toetsECMax = makeElem('p', 'maxEC');
        toetsECMax.style = "text-align: right;"
        var toetsScore = makeElem('p', 'score');
        var toetsEC = makeElem('p', 'EC');
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
        toetsLI.appendChild(toetsNaam);
        toetsLI.appendChild(toetsECMax);
        toetsLI.appendChild(toetsScore);
        toetsLI.appendChild(toetsEC);
        blokUL.appendChild(toetsLI);
    }
    toetsOverzicht.appendChild(blokUL);
}
total = makeElem('div', 'totaal');
var voortgang = "";
if (totalEC < 45) {
    voortgang += " -";
} else if (totalEC < 60) {
    voortgang += " +-";
} else {
    voortgang += " +";
}
var voortgangperc = Math.min(Math.floor(totalEC/60 * 100), 100);
total.innerHTML = "<p id=the45mark class=unselectable>(" + totalEC + "/60 EC)</p><p class=\"unselectable " + voortgang + "\" style=\"margin: 0; width: " + voortgangperc + "%;\">Studievoortgang</p>";
toetsOverzicht.appendChild(total);