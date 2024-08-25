//Handle form submission
document.getElementById('paris-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    //Display pop-up message
    const popup = document.getElementById('popupMessage');
    popup.classList.remove('hidden');
  
    // Hide pop-up after 3 seconds
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 3500);
  
  });
  
  
  document.getElementById('hotel-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    //Display pop-up message
    const popup = document.getElementById('popupMessage');
    popup.classList.remove('hidden');
  
    // Hide pop-up after 3 seconds
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 3500);
  
  });
  
  
  document.getElementById('entertainment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    //Display pop-up message
    const popup = document.getElementById('popupMessage');
    popup.classList.remove('hidden');
  
    // Hide pop-up after 3 seconds
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 3500);
  
  });
  
  
  document.getElementById('taxi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    //Display pop-up message
    const popup = document.getElementById('popupMessage');
    popup.classList.remove('hidden');
  
    // Hide pop-up after 3 seconds
    setTimeout(() => {
        popup.classList.add('hidden');
    }, 3500);
  
  });
  
  
  // Handle Contact Us Button Click
  document.getElementById('contactBtn').addEventListener('click', function() {
    const contactForm = document.getElementById('contact-form');
    console.log('Button clicked, toggling hidden class...');
    contactForm.classList.remove('hidden');
    contactForm.classList.add('active');
    console.log('Hidden class state:', contactForm.classList.contains('hidden'));
  });
  
  
  // Get references to the buttons
  const parisBtn = document.getElementById('parisBtn');
  const hotelBtn = document.getElementById('hotelBtn');
  const taxiBtn = document.getElementById('taxiBtn');
  const entertainmentBtn = document.getElementById('entertainmentBtn');
  
  // Get references to the forms
  const parisForm = document.getElementById('paris-form');
  const hotelForm = document.getElementById('hotel-form');
  const taxiForm = document.getElementById('taxi-form');
  const entertainmentForm = document.getElementById('entertainment-form');
  
  // Function to hide all forms
  function hideAllForms() {
    parisForm.classList.add('hidden');
    parisForm.classList.remove('active');
    hotelForm.classList.remove('active');
    taxiForm.classList.remove('active');
    entertainmentForm.classList.remove('active');
  }
  
  // Event listeners for buttons
  parisBtn.addEventListener('click', function() {
    hideAllForms();
    parisForm.classList.add('active');
  });
  hotelBtn.addEventListener('click', function() {
    hideAllForms();
    hotelForm.classList.add('active');
  });
  
  taxiBtn.addEventListener('click', function() {
    hideAllForms();
    taxiForm.classList.add('active');
  });
  
  entertainmentBtn.addEventListener('click', function() {
    hideAllForms();
    entertainmentForm.classList.add('active');
  });