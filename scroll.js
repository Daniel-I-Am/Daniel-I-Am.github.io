//kleur verandering op scroll
function onScroll() {
    //if window is not at top of screen
    if (window.scrollY>0) {
        //set background of title in header to the same color as the rest of the header
        document.getElementById('header').style="background-color: var(--navbar-color);"
    } else {
        //reset
        document.getElementById('header').style=""
    }
}
//apply this to the body
document.getElementsByTagName("body")[0].onscroll = function() {onScroll()};