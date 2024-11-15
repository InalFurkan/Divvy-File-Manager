document.getElementById("loginButton").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Send the AJAX request
    fetch("/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
        .then(response => {
            console.log('Response headers:', response.headers.get("content-type"));
            console.log('Raw response:', response);
            return response.json();
        })
        .then(data => {
            if (data.success) {
                alert("Login successful!");
                window.location.href = "/dashboard";
            } else {
                alert("Login failed: " + data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        });
});
