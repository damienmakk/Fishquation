const API_KEY = "698e0628bf4bccf55753e4e1";
const BASE_URL = "https://fishquation-0faf.restdb.io/rest/userinfo";

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const formMsg = document.getElementById("formMsg");

  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const username = document.getElementById("suName").value;
      const email = document.getElementById("suEmail").value;
      const password = document.getElementById("suPass").value;

      try {
        const response = await fetch(BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-apikey": API_KEY,
            "cache-control": "no-cache"
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password
          })
        });

        const data = await response.json();

        if (response.ok) {
          formMsg.textContent = "Account created successfully!";
          signupForm.reset();
        } else {
          formMsg.textContent = data.message || "Error creating account.";
        }

      } catch (error) {
        formMsg.textContent = "Network error. Check console.";
        console.error(error);
      }
    });
  }
});