document.getElementById('update-info-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Retrieve the updated employee information
  var firstName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;
  
  // Perform the necessary actions, such as making an AJAX request to update the employee information
  // and providing appropriate feedback to the employee
  
  // Example: Log the updated employee information to the console
  console.log('Updated First Name:', firstName);
  console.log('Updated Last Name:', lastName);
});


