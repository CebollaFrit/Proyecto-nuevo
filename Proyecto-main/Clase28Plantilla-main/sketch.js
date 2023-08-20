const firebaseConfig = {
  apiKey: "AIzaSyCysQgAKfZcK8czpy8iP0cSY4-rteBp0Z0",
  authDomain: "proyecto-mapache-f12d1.firebaseapp.com",
  projectId: "proyecto-mapache-f12d1",
  storageBucket: "proyecto-mapache-f12d1.appspot.com",
  messagingSenderId: "196089811190",
  appId: "1:196089811190:web:94c957aaf52d9fe9ec9cd7",
  measurementId: "G-6TJTZCQ3VV"
};
// Function to show the sign-up form
function showSignUpForm() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("signup-screen").style.display = "block";
}

// Function to show the login form
function showLogInForm() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("login-screen").style.display = "block";
}

// Function to handle adding a new job placeholder
function addJob() {
  const jobContainer = document.getElementById("job-container");
  const jobInput = document.createElement("input");
  jobInput.type = "text";
  jobInput.className = "job-input";
  jobInput.placeholder = "Job";
  jobInput.required = true;
  jobContainer.appendChild(jobInput);
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  // Code to handle form submission
}

// Event listener for form submission
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", submitForm);

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", login);


import { getDatabase, ref, set } from "firebase/database";

function writeUserData(ID, Personas, Persona  ) {
  const db = getDatabase();
  set(ref(db, 'Personas/' + ID), {
    name: name,
    email: email,
    
  });
}