function searchStatusCodes() {
    var input, filter, statusGroups, statusCodes, title, i, txtValue;
    input = document.getElementById('searchBox');
    filter = input.value.toUpperCase();
    statusGroups = document.getElementsByClassName('status-code-group');

    for (i = 0; i < statusGroups.length; i++) {
        statusCodes = statusGroups[i].getElementsByClassName('status-code');
        for (var j = 0; j < statusCodes.length; j++) {
            title = statusCodes[j].getElementsByTagName('h3')[0];
            txtValue = title.textContent || title.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                statusCodes[j].style.display = "";
            } else {
                statusCodes[j].style.display = "none";
            }
        }
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        searchStatusCodes();
    }
}