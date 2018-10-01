//function trigered on the dashboard page by input elements
function checkboxLabelToggle(obj) {
    //if it is checked now
    if (obj.checked) {
        //change the class to it's `on` attribute
        obj.previousElementSibling.attributes.class.value = obj.previousElementSibling.attributes.on.value;
        //move around container below the clicked one
        if (obj.parentElement.nextElementSibling != null) {
            obj.parentElement.nextElementSibling.style.transform = "translateY(" + obj.nextElementSibling.clientHeight + "px)";
        }
    //if it is not checked now 
    } else {
        //change the class to it's `off` attribute
        obj.previousElementSibling.attributes.class.value = obj.previousElementSibling.attributes.off.value;
        //move around container below the clicked one
        if (obj.parentElement.nextElementSibling != null) {
            obj.parentElement.nextElementSibling.style.transform = "";
        }
    }
}