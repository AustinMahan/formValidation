$(document).ready(function() {
  console.log('test');
  var firstName = $('#fName').val()
  $('form').submit(function(event) {
    event.preventDefault()

    firstNameCheck();
    lastNameCheck();

  })

  function firstNameCheck() {
    var numValidLetters = 3
    if (firstName.length < 3) {
      var message = 'Your name is too short, you suck'
      $('.fNameError').append(message)

      setTimeout(function() {
        $('.fNameError').fadeOut(300)
      }, 2500)
    };
  }

  function lastNameCheck() {
    var lastName = $('#lName').val()
    if (lastName[0] !== lastName[0].toUpperCase()) {
      $('.lNameError').append('First letter must be capitalized')

      setTimeout(function () {
        $('.lNameError').fadeOut(400)
      },2500)
    } else if (lastName.length < 5) {
      $('.lNameError').append('Must be longer than 5 letters')

      setTimeout(function () {
        $('.lNameError').fadeOut(400)
      },2500)
    }
  }

});
