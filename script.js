function validateForm() {
    // Get the form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthDate = document.getElementById('birthDate').value;
    const session = document.querySelector('input[name="session"]:checked');
    const parentName = document.getElementById('parentName').value;
    const phone = document.getElementById('phone').value;

    // Calculate the age
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const age = today.getFullYear() - birthDateObj.getFullYear();
    const month = today.getMonth() - birthDateObj.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    if (age < 5) {
        alert("Registration not allowed for children under 5 years old.");
        return false;
    }

    // Display confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';
    confirmationMessage.innerHTML = `
        <h2>Registration Successful!</h2>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Phone: ${phone}</p>
        <p>Total Bill: Rs ${session.value}</p>
    `;

    return false; // Prevent actual form submission
}
