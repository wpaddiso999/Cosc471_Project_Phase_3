document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Retrieve the start location and end location values
  var startLocation = document.getElementById('start-location').value;
  var endLocation = document.getElementById('end-location').value;
  
  // Perform the necessary actions, such as making an AJAX request to fetch routes
  // and displaying the search results to the user
  
  // Example: Log the start location and end location to the console
  console.log('Start Location:', startLocation);
  console.log('End Location:', endLocation);
});


