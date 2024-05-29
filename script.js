let shareButton = document.querySelector('.share-icon');
let shareSection = document.querySelector('.share-section');
let shareIcon = document.querySelector('.share-image')


shareButton.addEventListener('click', function() {
  shareSection.classList.toggle('no-display');
  shareButton.classList.toggle('active'); // Toggle a class for styling the button
  shareIcon.classList.toggle('active'); // Toggle a class for styling the icon

  // Check if the button is active to set styles accordingly
  if (shareButton.classList.contains('active')) {
    shareButton.style.backgroundColor = 'var(--dark-gray-blue)';
    shareIcon.style.filter = 'brightness(0) invert(1)';
  } else {
    shareButton.style.backgroundColor = ''; // Reset the background color
    shareIcon.style.filter = ''; // Remove the filter
  }
});