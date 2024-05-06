// Import Chart.js library
document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.querySelector('.login-container');
    const receptionistPortal = document.getElementById('receptionist-portal');
    const doctorPortal = document.getElementById('doctor-portal');

    // Initially, hide receptionist and doctor portals
    receptionistPortal.style.display = 'none';
    doctorPortal.style.display = 'none';

    // Function to handle login form submission
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate authentication
        if (username === 'receptionist' && password === 'password') {
            showReceptionistPortal();
        } else if (username === 'doctor' && password === 'password') {
            showDoctorPortal();
        } else {
            alert('Invalid username or password');
        }
    });

    // Function to show receptionist portal
    function showReceptionistPortal() {
        loginContainer.style.display = 'none';
        receptionistPortal.style.display = 'block';
        doctorPortal.style.display = 'none';
    }

    // Function to show doctor portal
    function showDoctorPortal() {
        loginContainer.style.display = 'none';
        receptionistPortal.style.display = 'none';
        doctorPortal.style.display = 'block';
        fetchPatientDataForDoctor(); // Simulated function to fetch patient data
        generateGraph(); // Generate graph function call
    }

    // Simulated function to fetch patient data for doctor portal
    function fetchPatientDataForDoctor() {
        const patientsList = document.getElementById('doctor-patients-list');
        const patients = [
            { name: 'John Doe', age: 30 },
            { name: 'Jane Smith', age: 25 },
            { name: 'Alice Johnson', age: 35 }
        ];
        patientsList.innerHTML = ''; // Clear previous data
        patients.forEach(patient => {
            const li = document.createElement('li');
            li.textContent = `${patient.name} (Age: ${patient.age})`;
            patientsList.appendChild(li);
        });
    }

    // Function to generate the graph
    function generateGraph() {
        // Dummy data for demonstration
        const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
        const patientsRegistered = [5, 10, 8, 12, 15];

        // Create the chart
        const ctx = document.getElementById('graph-placeholder').getContext('2d');
        const registrationChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: days,
                datasets: [{
                    label: 'Number of Patients Registered',
                    data: patientsRegistered,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
});
