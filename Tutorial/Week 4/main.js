document.addEventListener("DOMContentLoaded", function(){ 
  // DOMContentLoaded is for checking if the DOM has loaded before initialising functions
  let testButton = document.getElementById('testButton');
  // Adding on click listeners to button and body it causes bubbling of events
  testButton.addEventListener('click', function (event) {
    // event.stopPropogation Prevents bubbling of events 
    event.stopPropagation();
    console.log('Button Clicked');
  });

  document.body.addEventListener('click', function (event) {
    console.log('Body Clicked');
  })
});