// show the popup
function popup_show(e) {
    popup_action("#sendmessage", "block");
}

// hide the popup
function popup_hide(e) {
    popup_action("", "none");
}

function popup_action(uri, state) {
    // find elem and change style
    var popup = document.getElementById('popup-container');
    popup.style.display = state;

    // change uri
    history.pushState(null, null, 'index.html' + uri);
};

window.addEventListener ('popstate', function(e){
    popup_hide(e);
})