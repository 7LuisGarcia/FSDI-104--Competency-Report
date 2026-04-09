const form = document.getElementById("contactForm");
const successBox = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    successBox.style.display = "block";
    form.reset();

    setTimeout(() => {
        successBox.style.display = "none";
    }, 3000);
});
