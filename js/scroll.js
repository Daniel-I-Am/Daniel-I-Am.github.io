//kleur verandering op scroll
function onScroll() {
    //if window is not at top of screen
    if (window.scrollY>0) {
        //set background of title in header to the same color as the rest of the header
        document.getElementById('header').style="background-color: var(--header-background-color);"
    } else {
        //reset
        document.getElementById('header').style=""
    }

     if (screen.width <= 800) {
         let header = document.getElementById("header")
         header.style.position = "relative"
     }
}
//apply this to the body
document.getElementsByTagName("body")[0].onscroll = function() {onScroll()};