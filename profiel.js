var content = document.getElementsByClassName('content');

for (c=0; c<content.length; c++) {
    if (content[c].children) {
        if (content[c].children.length == content[c].querySelectorAll('img').length && content[c].children.length > 1) {
            // if the content only exists of images and more than just one
            content[c].className += " imgContent"
        }
    }
}