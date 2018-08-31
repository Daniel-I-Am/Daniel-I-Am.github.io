function checkboxLabelToggle(obj) {
    if (obj.checked) {
        obj.previousElementSibling.attributes.class.value = obj.previousElementSibling.attributes.on.value;
    } else {
        obj.previousElementSibling.attributes.class.value = obj.previousElementSibling.attributes.off.value;
    }
}