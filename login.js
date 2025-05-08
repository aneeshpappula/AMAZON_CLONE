document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
    } else {
        document.getElementById('error').textContent = 'Invalid username or password!';
    }
});
