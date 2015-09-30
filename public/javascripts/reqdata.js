$(document).ready( function() {
    init() 
});

function init() {
  alert('Loading data')

  $.get('/api/data', function(data) {
    if(!jQuery.isEmptyObject(data)) {
      alert('Got data!')
    } else {
      alert('No data')
    }

  });
}
