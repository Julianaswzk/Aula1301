document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('myButton');
    var message = document.getElementById('message');

    button.addEventListener('click', function() {
        message.textContent = 'Você clicou no botão!';
    });
});
