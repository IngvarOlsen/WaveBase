document.body.addEventListener('click', function(e) {
  if (e.target.matches('css-doodle')) {
    e.target.refresh();
  }  
})