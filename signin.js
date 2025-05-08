document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (validateEmail(email) && validatePassword(password)) {
        alert('Sign in successful!');
    } else {
        document.getElementById('error').textContent = 'Invalid email or password!';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6; // Example validation rule
}
