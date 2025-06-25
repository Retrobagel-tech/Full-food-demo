const btn = document.getElementById('splashBtn');
const splash = document.getElementById('splashEffect');

btn.addEventListener('click', () => {
  // Activate splash animation
  splash.classList.add('active');
  
  // Optional: disable button so user can't click multiple times
  btn.disabled = true;

  // Redirect after animation ends (~600ms)
  setTimeout(() => {
    window.location.href = 'order.html'; // replace with your URL
  }, 600);
});

let currentUrl = document.URL;

// Log the URL to the console
console.log(currentUrl);
