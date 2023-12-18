function saveSettings() {
    // Fetch values from input fields
    const profilePicture = document.getElementById('profilePicture').value;
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const idNumber = document.getElementById('idNumber').value;
    const hospital = document.getElementById('hospital').value;
    const specialty = document.getElementById('specialty').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const address = document.getElementById('address').value;

    // Perform actions with the data (e.g., send to server)

    // For this example, let's just log the data to the console
    console.log({
        profilePicture,
        name,
        dob,
        gender,
        email,
        idNumber,
        hospital,
        specialty,
        phoneNumber,
        address,
    });

}
