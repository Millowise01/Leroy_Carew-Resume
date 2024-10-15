// JavaScript function to validate the contact form
function validateForm() {
    // Get the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validate the fields
    if (name === '') {
        alert('Please enter your name.');
        return false;
    }
    
    if (email === '' || !emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    if (message === '') {
        alert('Please enter your message.');
        return false;
    }
    
    // If all fields are valid, allow the form to be submitted
    return true;
}
