// AyurPulse Frontend JavaScript

// Login Function
function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter username and password");
        return;
    }

    alert("Login Successful!");

    // Redirect to dashboard
    window.location.href = "dashboard.html";
}

// Patient Registration
function registerPatient() {
    const patientName = document.getElementById("patientName").value;
    const patientAge = document.getElementById("patientAge").value;
    const patientGender = document.getElementById("patientGender").value;

    if (
        patientName === "" ||
        patientAge === "" ||
        patientGender === ""
    ) {
        alert("Please fill all patient details");
        return;
    }

    alert("Patient Registered Successfully!");

    // Clear form
    document.getElementById("patientName").value = "";
    document.getElementById("patientAge").value = "";
    document.getElementById("patientGender").value = "";
}

// Appointment Booking
function bookAppointment() {
    const doctor = document.getElementById("doctorName").value;
    const date = document.getElementById("appointmentDate").value;

    if (doctor === "" || date === "") {
        alert("Please select doctor and date");
        return;
    }

    alert("Appointment Booked Successfully!");
}

// AI Pulse Analysis Simulation
function analyzePulse() {
    const pulseRate = document.getElementById("pulseRate").value;

    if (pulseRate === "") {
        alert("Enter pulse rate");
        return;
    }

    let result = "";

    if (pulseRate < 60) {
        result = "Low Pulse Rate";
    } else if (pulseRate >= 60 && pulseRate <= 100) {
        result = "Normal Pulse Rate";
    } else {
        result = "High Pulse Rate";
    }

    document.getElementById("analysisResult").innerHTML =
        "Analysis Result: " + result;
}

// Logout Function
function logoutUser() {
    alert("Logged Out Successfully");
    window.location.href = "index.html";
}
