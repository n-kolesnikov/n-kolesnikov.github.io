var storage = localStorage;

if(!localStorage.getItem('name')) {
    populateStorage();
  } else {
    setStyles();
  }

var name_form = document.getElementById('edit-name');
var email_form = document.getElementById('edit-e-mail');
var comment_form = document.getElementById('edit-comment');

function populateStorage() {
  localStorage.setItem('name', document.getElementById('edit-name').value);
  localStorage.setItem('e-mail', document.getElementById('edit-e-mail').value);
  localStorage.setItem('comment', document.getElementById('edit-comment').value);
  setStyles();
}

function setStyles() {
  var current_name = localStorage.getItem('name');
  var current_email = localStorage.getItem('e-mail');
  var current_comment = localStorage.getItem('comment');

  document.getElementById('edit-name').value = current_name;
  document.getElementById('edit-e-mail').value = current_email;
  document.getElementById('edit-comment').value = current_comment;

}

name_form.onchange = populateStorage;
email_form.onchange = populateStorage;
comment_form.onchange = populateStorage;