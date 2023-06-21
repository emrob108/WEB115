document.addEventListener("DOMContentLoaded", function() {
  var inputField = document.getElementById('inputField');
  var form = document.getElementById('myForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var isValid = validateInput(inputField.value);

    if (!isValid) {
      alert('Error: Input must be alphanumeric');
    }
    else {
      alert('Success! Input was submitted successfully!');
      location.reload();
    }
  });
});

function validateInput(value) {
  var regex = /^[a-z0-9]+$/i;

  if (!regex.test(value)) {
    return false;
  }
  return true;
}