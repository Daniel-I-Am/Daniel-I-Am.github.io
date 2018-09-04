    //kleur verandering op scroll
    function onScroll() {
        if (window.scrollY>0) {
            document.getElementById('header').style="background-color: var(--navbar-color);"
        } else {
            document.getElementById('header').style=""
        }
    }
    document.getElementsByTagName("body")[0].onscroll = function() {onScroll()};