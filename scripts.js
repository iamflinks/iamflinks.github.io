document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var data = {
        name: name,
        email: email,
        message: message
    };

    fetch('https://script.google.com/macros/s/AKfycbwGYZm0DjPgOwZmwi2TlDG4siqFmU8_FFYa74XDaAAfGZkTpfz_G3fnvj400KsodhEgXw/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Thank you for contacting me! I will get back to you soon.');
        } else {
            alert('There was an error submitting your form. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your form. Please try again.');
    });
});
