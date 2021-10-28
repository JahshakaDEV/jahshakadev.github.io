function showContent(elementId){
    if(document.getElementById(elementId).style.display === 'none') {
        document.getElementById(elementId).style.display = 'inline';
    } else {
        document.getElementById(elementId).style.display = 'none';
    }

}