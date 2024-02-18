// Initialize EmailJS
(function() {
    // Replace 'YOUR_PUBLIC_KEY' with your actual public key
    emailjs.init({
        publicKey: "n-Ts8f5T3OVM86shH",
    });
})();

// Add event listener to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send the form data using EmailJS
    emailjs.sendForm('contact_service', 'contact_form', this)
        .then(() => {
            console.log('SUCCESS!'); // Log success message
            toggleFormVisibility(); // Hide the form after successful submission
        }, (error) => {
            console.log('FAILED...', error); // Log error message
            // You can handle the error here if needed
        });
});
