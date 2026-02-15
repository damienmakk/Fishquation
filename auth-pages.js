document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const msg = document.getElementById("formMsg");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("liEmail").value;
      const pass = document.getElementById("liPass").value;

      try {
        const res = await fetch(`https://fishquation-0faf.restdb.io/rest/userinfo?q={"email":"${email}","password":"${pass}"}`, {
          method: "GET",
          headers: {
            "x-apikey": "698e0628bf4bccf55753e4e1",
            "Content-Type": "application/json"
          }
        });

        const data = await res.json();

        if (data.length === 1) {
          const user = data[0];
          
          localStorage.setItem("currentUser", JSON.stringify(user));

          if (user.onboardingComplete) {
            window.location.href = "dashboard.html";
          } else {
            window.location.href = "onboarding.html";
          }

        } else {
          msg.textContent = "Invalid email or password.";
        }

      } catch (err) {
        msg.textContent = "Login failed.";
        console.error(err);
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("suEmail").value;
      const pass = document.getElementById("suPass").value;
      const username = document.getElementById("suName") ? document.getElementById("suName").value : email.split('@')[0];

      try {
        const checkRes = await fetch(`https://fishquation-0faf.restdb.io/rest/userinfo?q={"email":"${email}"}`, {
          method: "GET",
          headers: {
            "x-apikey": "698e0628bf4bccf55753e4e1",
            "Content-Type": "application/json"
          }
        });

        const existingUsers = await checkRes.json();
        
        if (existingUsers.length > 0) {
          msg.textContent = "An account with this email already exists.";
          return;
        }

        const res = await fetch("https://fishquation-0faf.restdb.io/rest/userinfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-apikey": "698e0628bf4bccf55753e4e1"
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: pass,
            onboardingComplete: false,
            streak: 0,
            xp: 0,
            level: 1,
            fishFlakes: 0,
            ownedSkins: ['classic'],
            equippedSkin: 'classic',
            createdAt: new Date().toISOString()
          })
        });

        const data = await res.json();

        if (res.ok) {
          localStorage.setItem("currentUser", JSON.stringify(data));
          window.location.href = "onboarding.html";
        } else {
          msg.textContent = "Signup failed. Please try again.";
        }

      } catch (err) {
        msg.textContent = "Signup failed.";
        console.error(err);
      }
    });
  }

});