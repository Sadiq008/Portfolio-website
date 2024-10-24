document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target section ID from the link's href attribute
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      // Scroll to the target section
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  function highlightActiveLink() {
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute("id");

        if (
          sectionTop <= window.innerHeight / 2 &&
          sectionTop >= -section.offsetHeight
        ) {
          currentSection = sectionId;
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    });
  }

  highlightActiveLink();

  const projects = document.querySelectorAll(".projects_details > div");

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      const paragraphs = project.querySelectorAll("p");
      paragraphs.forEach((p) => {
        p.style.display = p.style.display === "block" ? "none" : "block";
      });
    });
  });

  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.innerHTML = json.message;
        } else {
          console.log(response);
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        setTimeout(() => {
          result.style.display = "none";
        }, 3000);
      });
  });
});
