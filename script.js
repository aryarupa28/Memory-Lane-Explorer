//for login
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        var userId = document.getElementById('userId').value.trim();
        var password = document.getElementById('password').value.trim();

        // Validate input fields
        if (userId === '' || password === '') {
            alert('Please enter both User ID and Password.');
            return;
        }

        // Check if user ID and password match
        if (userId === 'patelroneek' && password === '9523846155') {
            alert('Login successful');
            window.location.href = "dashboard.html"; // Redirect to dashboard page after successful login
        } else {
            // Display error message for authentication failure
            alert('Invalid User ID or Password.');
        }
    });
});
// for signup
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        var email = document.getElementById('email').value.trim();
        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value.trim();
        var confirmPassword = document.getElementById('confirmPassword').value.trim();

        // Perform any necessary validation here (e.g., checking if passwords match)

        // Placeholder for signup logic (not implemented in this example)
        // Assuming signup is always successful
        // Redirect to dashboard page after successful signup
        window.location.href = "dashboard.html";
    });
});
