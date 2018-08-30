function checkboxLabelToggle(obj) {
    if (obj.checked) {
        obj.previousElementSibling.innerHTML = obj.previousElementSibling.attributes.on.value;
    } else {
        obj.previousElementSibling  .innerHTML = obj.previousElementSibling.attributes.off.value;
    }
}