exports.login = (req, res) => {
    const { email, password } = req.body;

    // Example authentication logic
    if (email === "test" && password === "password") {
        res.json({ success: true, message: "Login successful!" });
    } else {
        res.json({ success: false, message: "Invalid email or password." });
    }
};
