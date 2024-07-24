document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop de standaard formulier verzending

    var form = event.target;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    }).then(function(response) {
        if (response.ok) {
            window.location.href = 'bestellingverstuurd.html'; // Redirect naar de bedankpagina
        } else {
            window.location.href = 'bestellingverstuurd.html'; // Redirect naar de bedankpagina
        }
    }).catch(function(error) {
        window.location.href = 'bestellingverstuurd.html'; // Redirect naar de bedankpagina
    });
});
